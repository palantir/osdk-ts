import{j as i}from"./iframe-BbienW_k.js";import{O as p}from"./object-table-B0ggEq35.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Db7zaXUt.js";import"./preload-helper-BwYT6GBt.js";import"./Table-CfHAZrq3.js";import"./index-BtVRX5ik.js";import"./Dialog-CEYCtVCN.js";import"./cross-D79BwPuA.js";import"./svgIconContainer-9jKJCEtA.js";import"./useBaseUiId-mGNAwuSb.js";import"./InternalBackdrop-BGghe2gX.js";import"./composite-DehmI49I.js";import"./index-_tXk15dP.js";import"./index-CBwDIYK2.js";import"./index-DHabHcMF.js";import"./useEventCallback-CRCaMKxg.js";import"./SkeletonBar-CNiR4LJi.js";import"./LoadingCell-CLphyg8f.js";import"./ColumnConfigDialog-D9bURUp0.js";import"./DraggableList-CaawD_zV.js";import"./search-DtpodeH8.js";import"./Input-C02zCytb.js";import"./useControlled-BbPCoZLB.js";import"./Button-DgQWdRpI.js";import"./small-cross-Bbjb07uO.js";import"./ActionButton-CH9BHHmi.js";import"./Checkbox-Bh14gdun.js";import"./useValueChanged-B86iGZyF.js";import"./CollapsiblePanel-CzWLrbRF.js";import"./MultiColumnSortDialog-CbdTworu.js";import"./MenuTrigger-B_CsaOE_.js";import"./CompositeItem-BtZO_Q27.js";import"./ToolbarRootContext-tNJYHhh0.js";import"./getDisabledMountTransitionStyles-DNQX_6BS.js";import"./getPseudoElementBounds-B22wLb31.js";import"./chevron-down-BvQtKUUh.js";import"./index-Bvo9wdGf.js";import"./error-Re8NGQni.js";import"./BaseCbacBanner-Cl4iMAcK.js";import"./makeExternalStore-D54vu3Pa.js";import"./Tooltip-CfUkHW1C.js";import"./PopoverPopup-9hgtmzo1.js";import"./debounce-CfOEKZQ8.js";import"./useOsdkClient-Ba-MyRxU.js";import"./tick-DXkGn8fU.js";import"./DropdownField-DWMcGlhL.js";import"./isEqual-CS7j3ZhU.js";import"./withOsdkMetrics-dw5qmcGp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
