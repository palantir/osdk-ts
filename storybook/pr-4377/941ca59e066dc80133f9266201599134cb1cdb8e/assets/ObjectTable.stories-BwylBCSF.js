import{j as i}from"./iframe-C3GSLy5o.js";import{O as p}from"./object-table-C4RtD8RL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DrPOGPqV.js";import"./preload-helper-D1pMQ95h.js";import"./Table-CkKtRkcj.js";import"./index-BqbG7XLm.js";import"./Dialog-QyPTSiVh.js";import"./cross-dj-R22cu.js";import"./svgIconContainer-F6eoLrGz.js";import"./useBaseUiId-BAyO3Mf6.js";import"./InternalBackdrop-Dum2xeez.js";import"./composite-BVI_0hxc.js";import"./index-BwMTOFIg.js";import"./index-DXO-Swuq.js";import"./index-CZROecO1.js";import"./useEventCallback-BJ1Px1w8.js";import"./SkeletonBar-CVOuSg9f.js";import"./LoadingCell-FBheXDIZ.js";import"./ColumnConfigDialog-B7wNvZn4.js";import"./DraggableList-Bt8Io2mn.js";import"./search-DVQaImB8.js";import"./Input-C6r5AvcX.js";import"./useControlled-Byp-7XUM.js";import"./Button-BYai770H.js";import"./small-cross-DrCyLNki.js";import"./ActionButton-DhwSIxab.js";import"./Checkbox-s9kARS31.js";import"./useValueChanged-CnNP0I2h.js";import"./CollapsiblePanel-BqBPvrl-.js";import"./MultiColumnSortDialog-BpbO_ybu.js";import"./MenuTrigger-C0ONJiNd.js";import"./CompositeItem-BdOQd8fF.js";import"./ToolbarRootContext-DHSDX_M4.js";import"./getDisabledMountTransitionStyles-CmNfXk7f.js";import"./getPseudoElementBounds-DXbT67tB.js";import"./chevron-down-CZCskiqb.js";import"./index-bCW6YcNg.js";import"./error-73rgwKrP.js";import"./BaseCbacBanner-CSAoPOE1.js";import"./makeExternalStore-BkjVxrjL.js";import"./Tooltip-BESMOsqJ.js";import"./isObject-VV2I263M.js";import"./debounce-BTUnznPP.js";import"./useOsdkClient-C6Bijc8m.js";import"./tick-J5BevPob.js";import"./DropdownField-M-86bao8.js";import"./isEqual-C87bStg5.js";import"./_baseIsEqual-DQRLufDU.js";import"./withOsdkMetrics-BcmXRm6y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
