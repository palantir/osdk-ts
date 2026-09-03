import{j as i}from"./iframe-B9NaG1GB.js";import{O as p}from"./object-table-CFjdwvCD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-hiyi_SgV.js";import"./preload-helper-udZSqlM2.js";import"./Table-sD7nNFbd.js";import"./index-yUq6Iven.js";import"./Dialog-Dh198Xyv.js";import"./cross-BaJlm1ee.js";import"./svgIconContainer-Ch9sOYGG.js";import"./useBaseUiId-DgxXXPsW.js";import"./InternalBackdrop-C2K99UQF.js";import"./composite-B_1l4wbr.js";import"./index-DqyKTsev.js";import"./index-oAe2VpPP.js";import"./index-C7m4ZQHb.js";import"./useEventCallback-C-nAfNT0.js";import"./SkeletonBar-B3WZD8B_.js";import"./LoadingCell-BBqhAMOp.js";import"./ColumnConfigDialog-BlX-RA7F.js";import"./DraggableList-Dl23X7WD.js";import"./search-C7EjfmAX.js";import"./Input-BjAUxC1s.js";import"./useControlled-CxdGo8Ww.js";import"./Button-D3MlS94Q.js";import"./small-cross-DoygMeI4.js";import"./ActionButton-D6kiLQVM.js";import"./Checkbox-D3SSwq1g.js";import"./useValueChanged-C_9cZZ-H.js";import"./CollapsiblePanel-CwGD0sZF.js";import"./MultiColumnSortDialog-BFYe3cLr.js";import"./MenuTrigger-yzH0xIvu.js";import"./CompositeItem-D9-3_2mb.js";import"./ToolbarRootContext-Dkc8a9C0.js";import"./getDisabledMountTransitionStyles-B67W8wHq.js";import"./getPseudoElementBounds-EQT2lv3A.js";import"./chevron-down-CsyXd9Xe.js";import"./index-bgsc7zUx.js";import"./error-BcUNHOKh.js";import"./BaseCbacBanner-WR0woElR.js";import"./makeExternalStore-Ct-9sVSe.js";import"./Tooltip-DuqyUHxp.js";import"./PopoverPopup-BR9ZiCCw.js";import"./debounce-CI4bJKTw.js";import"./useOsdkClient-B2RCpAbM.js";import"./tick-CPo9xZcx.js";import"./DropdownField-DqeXn4qa.js";import"./isEqual-prfPAvtl.js";import"./withOsdkMetrics-1M7RvxJT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
