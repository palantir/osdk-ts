import{j as i}from"./iframe-CkbYc2pP.js";import{O as p}from"./object-table-CUpLjh1V.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cugv-XLM.js";import"./preload-helper-DWws0Fe8.js";import"./Table-BRLAersF.js";import"./index-B7qybUT7.js";import"./Dialog-BQ1LsR6o.js";import"./cross-B-KVwLek.js";import"./svgIconContainer-BePuMkB2.js";import"./useBaseUiId-vvHGjGIN.js";import"./InternalBackdrop-Z_-L2gMX.js";import"./composite-BMFfaa_y.js";import"./index-COpZ_srd.js";import"./index-BLluPW5F.js";import"./index-CHz79Cob.js";import"./useEventCallback-CT8_iKH-.js";import"./SkeletonBar-CXWwNKp3.js";import"./LoadingCell-BpT1Vpzy.js";import"./ColumnConfigDialog-gy3MtgbY.js";import"./DraggableList-D3xdxf9T.js";import"./search-4l5VikIh.js";import"./Input-TCA2ZWZm.js";import"./useControlled-BVzdlM3Q.js";import"./isEqual-D6wY5BBD.js";import"./isObject-CLSB1shT.js";import"./Button-BigCnc-F.js";import"./ActionButton-LCy3JXZ7.js";import"./Checkbox-Uuq4GMni.js";import"./useValueChanged-XJKlxe7a.js";import"./CollapsiblePanel-BnsHlHcz.js";import"./MultiColumnSortDialog-B4KTXyeq.js";import"./MenuTrigger-CxEOpvoP.js";import"./CompositeItem-BszmLGHn.js";import"./ToolbarRootContext-CzW8ESD7.js";import"./getDisabledMountTransitionStyles-PF9BIs3h.js";import"./getPseudoElementBounds-BonZGGeJ.js";import"./chevron-down-C4_wMWuh.js";import"./index-Burs7DZR.js";import"./error-dHO47Anr.js";import"./BaseCbacBanner-B6866jBg.js";import"./makeExternalStore-BkbUVh1s.js";import"./Tooltip-BDeVX6Eo.js";import"./PopoverPopup-DCEWnhQ4.js";import"./toNumber-D5eBbvyL.js";import"./useOsdkClient-BpR3WLdC.js";import"./tick-Bl3me1aB.js";import"./DropdownField-7aiTJRSK.js";import"./withOsdkMetrics-DQxmGXeb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
