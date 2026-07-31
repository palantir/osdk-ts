import{j as i}from"./iframe-ISHOQfc5.js";import{O as p}from"./object-table-8OpgWczO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DikPVBN0.js";import"./preload-helper-DvlVZRRW.js";import"./Table-CNtXhTM3.js";import"./index-DIh3jcjT.js";import"./Dialog-s5jYdQqX.js";import"./cross-CBjHcWLp.js";import"./svgIconContainer-DtuqW3jd.js";import"./useBaseUiId-uKaeTVeA.js";import"./InternalBackdrop-B4gO3MAw.js";import"./composite-B80WA38w.js";import"./index-D_YubaQ1.js";import"./index-Dqqtt2Iv.js";import"./index-BdKImVAr.js";import"./useEventCallback-DhwLiGkC.js";import"./SkeletonBar-DsWVYjaC.js";import"./LoadingCell-DI_k5VVW.js";import"./ColumnConfigDialog-CERMBd90.js";import"./DraggableList-Dneae-u-.js";import"./search-CMnUBHZ2.js";import"./Input-DdoFIUV_.js";import"./useControlled-CINon2aU.js";import"./isEqual-COeaYAD1.js";import"./isObject-Zv09roRs.js";import"./Button-DhvUcPPD.js";import"./ActionButton-BJk4oTw0.js";import"./Checkbox-CLXvGtwi.js";import"./useValueChanged-CHSNItn1.js";import"./CollapsiblePanel-hryjGiZW.js";import"./MultiColumnSortDialog-BODt7BHr.js";import"./MenuTrigger-M2awlbrt.js";import"./CompositeItem-Bo1P1gWs.js";import"./ToolbarRootContext-Dob_jToB.js";import"./getDisabledMountTransitionStyles-CJQTx1_6.js";import"./getPseudoElementBounds-CcbfbqiH.js";import"./chevron-down-DhII4Rpq.js";import"./index-BZc_8tWb.js";import"./error-DUcOx40G.js";import"./BaseCbacBanner-CNa1yrZi.js";import"./makeExternalStore-V0faKrRY.js";import"./Tooltip-B6GjTRqL.js";import"./PopoverPopup-DZ4RScjh.js";import"./toNumber-DTzRCPAH.js";import"./useOsdkClient-DahZKVKk.js";import"./tick-CFcRW_8j.js";import"./DropdownField-QAs5n16T.js";import"./withOsdkMetrics-Bw8tRnT9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
