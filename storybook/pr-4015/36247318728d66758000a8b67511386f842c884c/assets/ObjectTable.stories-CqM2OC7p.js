import{j as i}from"./iframe-Y1CUkKP1.js";import{O as p}from"./object-table-DQBuNMdk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B3bWar_x.js";import"./preload-helper-8Wffe73s.js";import"./Table-De-sUE09.js";import"./index-BgIb3D7l.js";import"./Dialog-zJinfTJn.js";import"./cross-C6CQ-Bph.js";import"./svgIconContainer-zBluTTvF.js";import"./useBaseUiId-AScn4b_2.js";import"./InternalBackdrop-BL3OC3Mi.js";import"./composite-BF49Bsji.js";import"./index-iBVyzjTo.js";import"./index-Bp2ZqYOt.js";import"./index-5n049uw8.js";import"./useEventCallback-563WN3on.js";import"./SkeletonBar-DGyBVuc7.js";import"./LoadingCell-C7zfzXwS.js";import"./ColumnConfigDialog-Dir9H2W4.js";import"./DraggableList-DOUwftOK.js";import"./search-kvTlC8VP.js";import"./Input-Db9jSpBp.js";import"./useControlled-21Syoeuq.js";import"./Button-DxN7lWSP.js";import"./small-cross-CpXS7-E7.js";import"./ActionButton-C9oPSSlN.js";import"./Checkbox-C7L-VnPz.js";import"./useValueChanged-tlFrKVn1.js";import"./CollapsiblePanel-Bb6ZrGRp.js";import"./MultiColumnSortDialog-D9dYaX6J.js";import"./MenuTrigger-DcnlfWyX.js";import"./CompositeItem-Dj9wX2bL.js";import"./ToolbarRootContext-MbtwPZ1o.js";import"./getDisabledMountTransitionStyles-DoO-DKYl.js";import"./getPseudoElementBounds-BBCNTbus.js";import"./chevron-down-AzVM-11H.js";import"./index-DGNKT7_4.js";import"./error-CxOGSZqi.js";import"./BaseCbacBanner-CD-E-bUb.js";import"./makeExternalStore-BeEve9Lc.js";import"./Tooltip-DFQq_M9K.js";import"./PopoverPopup-C3sIFE_l.js";import"./debounce-DaCmMChm.js";import"./useOsdkClient-D-yv75yo.js";import"./tick-1VZvyctz.js";import"./DropdownField-CeKz5eyy.js";import"./isEqual-Dt2RGhpW.js";import"./withOsdkMetrics-B3ENf8sD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
