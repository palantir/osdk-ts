import{j as i}from"./iframe-BX25vaaY.js";import{O as p}from"./object-table-dzzGL-Nt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CX5C8HI1.js";import"./preload-helper-B4fqOqCe.js";import"./Table-dFabYKTU.js";import"./index-cHBOMeEB.js";import"./Dialog-Bz88ckYq.js";import"./cross-DYoAuDNi.js";import"./svgIconContainer-CdYxDvot.js";import"./useBaseUiId-CcSHD2go.js";import"./InternalBackdrop-DAZjwhZx.js";import"./composite-CR6ea9de.js";import"./index-CwTTdI6G.js";import"./index-3gZ9GYf_.js";import"./index-Z6EGSFM5.js";import"./useEventCallback-rCSZBNnH.js";import"./SkeletonBar-iUlUOGnb.js";import"./LoadingCell-E-HcHpI-.js";import"./ColumnConfigDialog-B1PCFNF_.js";import"./DraggableList-BDPSc9uV.js";import"./search-Cq3hJNRT.js";import"./Input-B7_1OxfG.js";import"./useControlled-CncYrOIz.js";import"./Button-_HXzGyBt.js";import"./small-cross-ua1KNA1W.js";import"./ActionButton-YaVL47EC.js";import"./Checkbox-ChpXb7lQ.js";import"./useValueChanged-B5wvfKOk.js";import"./CollapsiblePanel-DUxCMy3H.js";import"./MultiColumnSortDialog-BGy0bW4w.js";import"./MenuTrigger-EWj52u5X.js";import"./CompositeItem-CmMVOFT8.js";import"./ToolbarRootContext-aY85yZom.js";import"./getDisabledMountTransitionStyles-DhBpb285.js";import"./getPseudoElementBounds-CIQTJ_fk.js";import"./chevron-down-EEZ-gmtO.js";import"./index-BzEoWnZU.js";import"./error-CJ3zu-Fv.js";import"./BaseCbacBanner-Ce8x1hpN.js";import"./makeExternalStore-M7acJIlW.js";import"./Tooltip-CQ8DNFV6.js";import"./PopoverPopup-BlgnwBvy.js";import"./debounce-CJILhTW-.js";import"./useOsdkClient-BMWDxtmb.js";import"./tick-D6Q1wyk4.js";import"./DropdownField-BMURQ1aW.js";import"./isEqual-_AKmbi14.js";import"./withOsdkMetrics-WVBxLOJx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
