import{j as i}from"./iframe-DxocSyIf.js";import{O as p}from"./object-table-CaKnpQ-i.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CDkFPum-.js";import"./preload-helper-D56zqST7.js";import"./Table-QSI8GlCw.js";import"./index-DfYEtxmC.js";import"./Dialog-d3R0xLoE.js";import"./cross-CVx988bJ.js";import"./svgIconContainer-Bj1sIzvv.js";import"./useBaseUiId--lgIG0_P.js";import"./InternalBackdrop-Cut_mBk7.js";import"./composite-Cghpi3uk.js";import"./index-02gWXqYk.js";import"./index-_cAiPY8y.js";import"./index-BEy5XIjA.js";import"./useEventCallback-DXHICVTo.js";import"./SkeletonBar-BaBNWfHB.js";import"./LoadingCell-Dpv0fPFj.js";import"./ColumnConfigDialog-xCBQCsG2.js";import"./DraggableList-Dk0oOAyq.js";import"./search-CQuVvSo7.js";import"./Input-Bw3XbqGk.js";import"./useControlled-BTWGqHDE.js";import"./Button-wSc2Yx62.js";import"./small-cross-hL-3WDGp.js";import"./ActionButton-CpdJTM7K.js";import"./Checkbox-DJoKfBe-.js";import"./useValueChanged-g_jUR8Y4.js";import"./CollapsiblePanel-Cy7Zihw3.js";import"./MultiColumnSortDialog-DUKtaUYS.js";import"./MenuTrigger-C_-OPkFs.js";import"./CompositeItem-idLXSPQh.js";import"./ToolbarRootContext-B-Vz0eah.js";import"./getDisabledMountTransitionStyles-RTvY0Tj_.js";import"./getPseudoElementBounds-DVmQFPdP.js";import"./chevron-down-myOLqEz6.js";import"./index-DNErSg1e.js";import"./error-CCnxuUsF.js";import"./BaseCbacBanner-C98-EIkC.js";import"./makeExternalStore-C5-_T4ZS.js";import"./Tooltip-CAu8kBHh.js";import"./PopoverPopup-YsdX51sf.js";import"./debounce-CCWQ0KNo.js";import"./useOsdkClient-BXG88ARm.js";import"./tick-CWU5bp-x.js";import"./DropdownField-Db8DvsDi.js";import"./isEqual-Bo2wP0vA.js";import"./withOsdkMetrics-CH0zpjho.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
