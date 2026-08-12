import{j as i}from"./iframe-CkxgfQeO.js";import{O as p}from"./object-table-CoR5juoc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DhTCgiQ6.js";import"./preload-helper-D5D19XNo.js";import"./Table-brYCPGGz.js";import"./index-IOPRRqhI.js";import"./Dialog-AECQsIBv.js";import"./cross-CH36hvQf.js";import"./svgIconContainer-BnddIgAA.js";import"./useBaseUiId-CoaLnFnK.js";import"./InternalBackdrop-CRqcgfb3.js";import"./composite-C9gQ7F0R.js";import"./index-CzQUlWmE.js";import"./index-BBrPyGlT.js";import"./index-COolpCRV.js";import"./useEventCallback-tNddHvUY.js";import"./SkeletonBar-yDZKm4eE.js";import"./LoadingCell-_jXEP0tP.js";import"./ColumnConfigDialog-KJWocYIu.js";import"./DraggableList-d77ZMIsB.js";import"./search-6LzY9pcR.js";import"./Input-CBK5xZA_.js";import"./useControlled-DB78SK-c.js";import"./isEqual-NN4sf9C3.js";import"./isObject-DbVGHmvG.js";import"./Button-DT56OzjG.js";import"./ActionButton-C6o3T8ok.js";import"./Checkbox-_MS3OdLx.js";import"./useValueChanged-DdUP-vnE.js";import"./CollapsiblePanel-Dl-C548X.js";import"./MultiColumnSortDialog-BYeNkeug.js";import"./MenuTrigger-lo2vMG6r.js";import"./CompositeItem-BTHTAMQz.js";import"./ToolbarRootContext-Cr1zYvXJ.js";import"./getDisabledMountTransitionStyles-B1AQ2GNq.js";import"./getPseudoElementBounds-CtK0BnJ-.js";import"./chevron-down-aLsddmml.js";import"./index-B9L6gED-.js";import"./error-DNZfmN7i.js";import"./BaseCbacBanner-C8q4nU5Z.js";import"./makeExternalStore-B9DKryZa.js";import"./Tooltip-C3tsi8xF.js";import"./PopoverPopup-D_wx_Xml.js";import"./toNumber-Dhle7t7R.js";import"./useOsdkClient-D8Cawu22.js";import"./tick-BVRdIfgv.js";import"./DropdownField-b310lDZ5.js";import"./withOsdkMetrics-Zaf_KVW8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
