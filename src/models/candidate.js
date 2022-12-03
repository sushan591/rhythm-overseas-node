"use strict";

module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define(
    "Candidate",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      passport_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pp_size_photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      full_size_photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passport_front: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passport_back: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emergency_contact_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      emergency_contact_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      emergency_contact_relation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cv: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      country_willing: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      previous_experience: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      approved_by: {
        type: DataTypes.UUID,
        allowNull: true,
      },
    },
    {
      tableName: "candidates",
    }
  );

  return Candidate;
};