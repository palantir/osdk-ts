import{j as i}from"./iframe-DkFy_hb4.js";import{O as p}from"./object-table-tqkgHWJN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-k-3xbj_q.js";import"./preload-helper-BICWnFyb.js";import"./Table-Czo-rNx0.js";import"./index-CVhUa1cn.js";import"./Dialog-DFAX-dbI.js";import"./cross-BZRmfado.js";import"./svgIconContainer-Cc9-LdUz.js";import"./useBaseUiId-o_BwtbxA.js";import"./InternalBackdrop-BfAbsSH4.js";import"./composite-BGBfqcyM.js";import"./index-CYtpQu4o.js";import"./index-BKrHpELt.js";import"./index-D1Z2JBnZ.js";import"./useEventCallback-D8o005mn.js";import"./SkeletonBar-BavgYnmL.js";import"./LoadingCell-Cn0CPdwq.js";import"./ColumnConfigDialog-BaazBVOL.js";import"./DraggableList-DsgYclEh.js";import"./search-CLZw3WrP.js";import"./Input-NAoVb_RW.js";import"./useControlled-DzWKWqDT.js";import"./Button-CIX_sEiv.js";import"./small-cross-4XsWs7Rg.js";import"./ActionButton-DkdJBeiD.js";import"./Checkbox-F2U6phuX.js";import"./useValueChanged-DPBclZxi.js";import"./CollapsiblePanel-CRr1BQCY.js";import"./MultiColumnSortDialog-BVI-ddvy.js";import"./MenuTrigger-DBm0Zv4A.js";import"./CompositeItem-CdeIEk-d.js";import"./ToolbarRootContext-h2PUW2Ai.js";import"./getDisabledMountTransitionStyles-DcR5RtRw.js";import"./getPseudoElementBounds-D5PVShQs.js";import"./chevron-down-DpJL6cgz.js";import"./index-BdEt_Nen.js";import"./error-GJosWbv9.js";import"./BaseCbacBanner-Bhn381V6.js";import"./makeExternalStore-C1G5lVa7.js";import"./Tooltip-BVdzPxCH.js";import"./PopoverPopup-Bc8XtssV.js";import"./debounce-DrtMuAJj.js";import"./useOsdkClient-DL12bN9E.js";import"./tick-CIdK2AnH.js";import"./DropdownField-D35PrCn4.js";import"./isEqual-BCM93oB1.js";import"./withOsdkMetrics-BuzdoqQa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
