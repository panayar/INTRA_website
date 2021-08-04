import { ClassField, Xliff } from '@angular/compiler';
import { Injectable } from '@angular/core';
import Web3 from 'web3';

// let Contract = require('web3-eth-contract');
const avatheeers = require('../../../../assets/data/avatheeers.json')

declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private web3: any;
  public address!: any;

  public abi!: JSON;
  public contract!: any;
  public avatheeer!: any;

  constructor() {
    this.address = localStorage.getItem('account');
    this.init();
    this.getBalance();
    // this.web3 = new Web3(Web3.givenProvider);
    // this.contract = new this.web3.eth.Contract(this.abi, this.address)
  }

  async init() {
    if (window.web3) {
      try {

        // Instantiate a new web3 with full capabilities
        this.web3 = new Web3(Web3.givenProvider);
        console.log(this.web3);

        const netId = await this.web3.eth.net.getId();

        // console.log(Web3.givenProvider);
        // Ropsten ID
        // console.log(netId)

        // if (netId !== 4) {
        //   localStorage.setItem('netId', netId)
        //   return console.log('This DApp needs to be loaded in Mumbai')
        // }

        const accounts = await this.web3.eth.requestAccounts();
        // console.log(accounts)
        localStorage.setItem('account', accounts);

        // notify('DApp loaded correctly');

        // Creates an instance of avatheeer contract
        // this.avatheeer = new Avatheeer(this.web3, netId);
        // this.loadInventory();

      } catch (err) {
        console.log('Dapp not loaded')
      }
    } else {
      console.log('Metamask is required')
    }
  };

  // test() { }

  async getRandomDna(name: any, address: any) {
    address = "0xf78fa9e060cdb55e3d508320f724478f98e6eb5f";
    this.contract = new this.web3.eth.Contract(avatheeers.abi, address)
    const generate = await this.contract.methods.generateRandomDna(name, address).call();
    console.log(generate);
    return generate;
  }

  // async getAvatheeersByOwner(address: any) {
  //   const avatheeerId = await this.contract.methods
  //     .getAvatheeersByOwner(address)
  //     .call();

  //   const avatheeersPromise = avatheeerId.map((avatheeerId: any) => {
  //     if (this.contract) {
  //       this.contract.methods.avatheeers(avatheeerId).call()
  //     }
  //   }
  //   );

  //   const avatheeers = await Promise.all(avatheeersPromise);

  //   return avatheeers.map((avatheeer: any, index: any) => ({
  //     id: avatheeerId[index],
  //     name: avatheeer[0],
  //     dna: avatheeer[1],
  //   }));
  // };

  async getBalance() {
    this.web3.eth.getBalance(this.address, (err: any, balance: any) => {
      if (balance) {
        console.log(this.web3.utils.fromWei(balance, 'ether'))
        let bal = this.web3.utils.fromWei(balance, 'ether')
        localStorage.setItem('balance', bal)

        return this.web3.utils.fromWei(balance, 'ether')
      } else {
        console.log(err)
      }
    })
  }

  async sendTest() {
    window.ethereum.enable();
    // this.init();
    this.web3 = new Web3(Web3.givenProvider);

    this.getBalance();

    const otherTransaction = {
      from: this.address,
      gasPrice: "0x09184e72a000",
      gas: "0x2710",
      to: '0x3535353535353535353535353535353535353535',
      value: "1000000000000000000",
      data: "0x7f7465737432000000000000000000000000000000000000000000000000000000600057"
    }

    const abiAddress = '0xf78fa9e060cdb55e3d508320f724478f98e6eb5f';

    const contract = '0x7f7465737432000000000000000000000000000000000000000000000000000000600057';

    // const transactionSigned = await this.web3.eth.sign('hola', address)
    //   .then(this.web3.eth.sendSignedTransaction())

    const sendSignedTransaction = await this.web3.eth.sendTransaction(otherTransaction)
    console.log(sendSignedTransaction)
  }

  async signTest() {
    window.ethereum.enable();
    // this.init();
    this.web3 = new Web3(Web3.givenProvider);

    const abiAddress = '0xf78fa9e060cdb55e3d508320f724478f98e6eb5f';

    const contract = '0x7f7465737432000000000000000000000000000000000000000000000000000000600057';

    let address;

    // console.log(this.web3.eth.getAccounts())
    // this.web3.eth.getAccounts()
    //   .then((result: any) => {
    //     address = result[0];
    //     console.log('Address: ', address)
    //   });

    address = '0xa375e347e2Eb23421CB67Dad9ffc9f348Bda5a03';

    let rawTx = {
      nonce: '0x00',
      gasPrice: '0x09184e72a000',
      gasLimit: '0x2710',
      to: '0x0000000000000000000000000000000000000000',
      value: '0x00',
      data: contract
    }

    const otherTransaction = {
      from: address,
      gasPrice: "0x09184e72a000",
      gas: "0x2710",
      to: '0x3535353535353535353535353535353535353535',
      value: "1000000000000000000",
      data: contract
    }

    // console.log('Transaccion: ', this.web3.eth.getTransaction(rawTx))

    // const txParams = {

    // }
    const blockNumber = await this.web3.eth.getBlockNumber()
    // .then(console.log);

    const block = await this.web3.eth.getBlock(blockNumber)
    console.log('Block: ', block);

    const transactionHash = block.hash;
    console.log('Transaction Hash: ', transactionHash)

    // const transaction = await this.web3.eth.getTransaction(transactionHash)
    // console.log(transaction)

    // const balance = await this.web3.eth.getBalance(address);
    // console.log('User balance: ', balance)

    // const signTransaction = await this.web3.eth.sign(contract, address);
    // console.log(signTransaction)

    const serialize = '0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f';

    // await this.web3.eth.sign(contract, address)
    // .then(await this.web3.eth.sendSignedTransaction(otherTransaction))


    const transactionSigned = await this.web3.eth.sign('hola', address)
    // .then(this.web3.eth.sendSignedTransaction())

    // this.web3.eth.sendSignedTransaction({
    //   from: address,
    //   gasPrice: "20000000000",
    //   gas: "21000",
    //   to: '0x3535353535353535353535353535353535353535',
    //   value: "1000000000000000000",
    //   data: ""
    // }).then(console.log);





    // const sendSignedTransaction = await this.web3.eth.sendTransaction(otherTransaction)
    // console.log(sendSignedTransaction)

    // const signTransaction = await this.web3.eth.signTransaction({
    //   from: "0xEB014f8c8B418Db6b45774c326A0E64C78914dC0",
    //   gasPrice: "20000000000",
    //   gas: "21000",
    //   to: '0x3535353535353535353535353535353535353535',
    //   value: "1000000000000000000",
    //   data: ""
    // })
    // console.log(signTransaction)

    // const sendTransaction = await this.web3.eth.sendTransaction({
    //   from: address,
    //   data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
    // })
    // .on('transactionHash', (hash: any) => {console.log})

    // .then(console.log)

    // const accounts = await this.web3.eth.requestAccounts();

    // let tx = new Tx(rawTx, { 'chain': 'ropsten' });
    // console.log(accounts)

    // this.web3.eth.sign(rawTx, abiAddress, function (err: any, result: any) {
    //   console.log(err, result);
    // });

    // const privateKey = this.web3.eth.personal.unlockAccount();
    // console.log(privateKey)
    // this.web3.eth.accounts.sendSignTransaction(rawTx, privateKey, () => {
    //   console.log('entre')
    // })
    // let serializedTx = tx.serialize();


    // this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
    //   .on('receipt', console.log);

  }


}
