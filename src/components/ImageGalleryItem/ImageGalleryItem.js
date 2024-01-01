import { Component } from 'react';

import { Item, Image } from './ImageGalleryItem.styled';
import { ImgModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };
  // openModal = () => {
  //   this.setState({
  //     isModalOpen: true,
  //   });
  // };

  // closeModal = () => {
  //   this.setState({
  //     isModalOpen: false,
  //   });
  // };

  render() {
    const { isModalOpen } = this.state;
    const { image, tags, largeImage } = this.props;

    return (
      <>
        <Item onClick={this.toggleModal}>
          <Image src={image} alt={tags} />
        </Item>
        <ImgModal
          isOpen={isModalOpen}
          onClose={this.toggleModal}
          tags={tags}
          image={largeImage}
        />
      </>
    );
  }
}