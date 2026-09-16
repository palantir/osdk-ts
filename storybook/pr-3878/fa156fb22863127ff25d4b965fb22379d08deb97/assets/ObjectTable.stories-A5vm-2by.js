import{j as i}from"./iframe-5UDGUP80.js";import{O as p}from"./object-table-DT9yW_zW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DshUwZOL.js";import"./preload-helper-C4oCDBip.js";import"./Table-Ch_fXbg9.js";import"./index-Bugktx71.js";import"./Dialog-eRa75sWc.js";import"./cross-CxetxkJH.js";import"./svgIconContainer-BQ_U4GID.js";import"./useBaseUiId-BJavFBRa.js";import"./InternalBackdrop-BDP5HkEg.js";import"./composite-BocxrVtD.js";import"./index-B43ppQJK.js";import"./index-CFmBTWdv.js";import"./index-BPg1wn6n.js";import"./useEventCallback-BBIFPkUx.js";import"./SkeletonBar-kb5Emx81.js";import"./LoadingCell-7txcW6zg.js";import"./ColumnConfigDialog-WvaYcGIP.js";import"./DraggableList-DrTVKaZD.js";import"./search-DXPDoI0I.js";import"./Input-Dk-R4cjA.js";import"./useControlled--GaTcUFv.js";import"./Button-_SyP2AI3.js";import"./small-cross-DJ3pxLUM.js";import"./ActionButton-BcauRl8O.js";import"./Checkbox-DZ7T1UOK.js";import"./useValueChanged-CIWK-Rio.js";import"./CollapsiblePanel-C1JLT-WA.js";import"./MultiColumnSortDialog-DSVS7wSF.js";import"./MenuTrigger-BEfXx9km.js";import"./CompositeItem-CF8sbYQc.js";import"./ToolbarRootContext-D-36hmPD.js";import"./getDisabledMountTransitionStyles-Dt1lgd6K.js";import"./getPseudoElementBounds-7jKiSX97.js";import"./chevron-down-D3oAKYgi.js";import"./index-Dok_ldqO.js";import"./error-BTC-cXwr.js";import"./BaseCbacBanner-C29IMPf2.js";import"./makeExternalStore-DwYufUqB.js";import"./Tooltip-BF8B5Q2Y.js";import"./PopoverPopup-uZRZUKrc.js";import"./debounce-BHw5pdhf.js";import"./useOsdkClient-Cry0QHXA.js";import"./tick-DHT-rrDO.js";import"./DropdownField-Do75zApJ.js";import"./isEqual-KV3yJUm_.js";import"./withOsdkMetrics-iD8vruam.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
