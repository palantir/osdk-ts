import{j as i}from"./iframe-Dcbb45TM.js";import{O as p}from"./object-table-uIGz-EJp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CaFlHmUS.js";import"./preload-helper-D8JM7gnw.js";import"./Table-BodGg9CV.js";import"./index-BP3mGvIi.js";import"./Dialog-D1W6oFiH.js";import"./cross-CFg2OY8m.js";import"./svgIconContainer-C653aYE0.js";import"./useBaseUiId-KvLNO8W4.js";import"./InternalBackdrop-b2U-fCTd.js";import"./composite-BIYviI6v.js";import"./index-LAjudTQg.js";import"./index-DPou_tLy.js";import"./index-DmcmRKU2.js";import"./useEventCallback-BI6RwFXd.js";import"./SkeletonBar-CBr_GrBQ.js";import"./LoadingCell-GOMssFxh.js";import"./ColumnConfigDialog-CztQHvcW.js";import"./DraggableList-CHMQl458.js";import"./search-8-lHNRta.js";import"./Input-DKG4JtdJ.js";import"./useControlled-Da1fb4mu.js";import"./Button-Bfb_bO0G.js";import"./small-cross-D2acqba7.js";import"./ActionButton-CriApq5G.js";import"./Checkbox-BXPSe9vd.js";import"./useValueChanged-Bf4o6EbE.js";import"./CollapsiblePanel-C7bD2Jvr.js";import"./MultiColumnSortDialog-DMQi2CRy.js";import"./MenuTrigger-BObXRj7Q.js";import"./CompositeItem-1Mp7uRya.js";import"./ToolbarRootContext-CgWzIiHM.js";import"./getDisabledMountTransitionStyles-XJIzxiBK.js";import"./getPseudoElementBounds-BbdSIzYb.js";import"./chevron-down-B67Z7lxm.js";import"./index-Dqy8Ou-s.js";import"./error-DGuxoAox.js";import"./BaseCbacBanner-CEHVUoYy.js";import"./makeExternalStore-Dm_3NQPJ.js";import"./Tooltip-CJk8wEl0.js";import"./PopoverPopup-0u1lAVs6.js";import"./debounce-CF6oR7xT.js";import"./useOsdkClient-vBOR5iVQ.js";import"./tick-DrS_4neF.js";import"./DropdownField-DH_fpvNY.js";import"./isEqual-DB8ime84.js";import"./withOsdkMetrics-BnTsjsNt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
