import{j as i}from"./iframe-CVjWJMmF.js";import{O as p}from"./object-table-D4ooF-A_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DU4cTN0_.js";import"./preload-helper-DW9TanSD.js";import"./Table-NZffx37x.js";import"./index-DkPpZQEy.js";import"./Dialog-CWfQdoBZ.js";import"./cross-Dl2vOulJ.js";import"./svgIconContainer-DkRHhgAa.js";import"./useBaseUiId-OuEDX3TX.js";import"./InternalBackdrop-CR34Ewfm.js";import"./composite-BCNmB505.js";import"./index-D4WXG5sY.js";import"./index-w6zbUUyx.js";import"./index-Dm_Ge5uT.js";import"./useEventCallback-B5YEIz9O.js";import"./SkeletonBar-DX1RNCoe.js";import"./LoadingCell-D4-E-UQj.js";import"./ColumnConfigDialog-YTFZCCrW.js";import"./DraggableList-BbL5yczo.js";import"./search-Cenk5EYj.js";import"./Input-Bt-eNbkA.js";import"./useControlled-Cb41SkUR.js";import"./Button-Dhayy-gQ.js";import"./small-cross-BYy4lIdj.js";import"./ActionButton-Bz2nLLis.js";import"./Checkbox-DsL8lHse.js";import"./useValueChanged-BLqQhLSX.js";import"./CollapsiblePanel-CCmgcfNX.js";import"./MultiColumnSortDialog-BMJWLvKA.js";import"./MenuTrigger-CqCLQ8GU.js";import"./CompositeItem-U33_rWfO.js";import"./ToolbarRootContext-n7CVeFta.js";import"./getDisabledMountTransitionStyles-CbAAbmOX.js";import"./getPseudoElementBounds-BQFi3yBI.js";import"./chevron-down-CJH6CLnR.js";import"./index-gTNpBnbn.js";import"./error-w9z2sjwy.js";import"./BaseCbacBanner-DPcBpAnp.js";import"./makeExternalStore-CpmQogqA.js";import"./Tooltip-BhxZaxYf.js";import"./PopoverPopup-B9Qp2Kpx.js";import"./debounce-D8r16Qwg.js";import"./useOsdkClient-DnVFgevD.js";import"./tick-B-ooZKr2.js";import"./DropdownField-CifY0DIK.js";import"./isEqual-ijbEh8nu.js";import"./withOsdkMetrics-D-WikLGs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
