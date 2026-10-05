import{j as i}from"./iframe-DGLAKnND.js";import{O as p}from"./object-table-Dpc5MjBr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cs6q60ZD.js";import"./preload-helper-DFgLk3H0.js";import"./Table-BsHucwjJ.js";import"./index-MAOZVqBp.js";import"./Dialog-B7LFCDuZ.js";import"./cross-CxVHgnds.js";import"./svgIconContainer-FR2bqQFg.js";import"./useBaseUiId-BaGNlDqg.js";import"./InternalBackdrop-CMlBsszD.js";import"./composite-CNVl9uwD.js";import"./index-D8VO6Jfw.js";import"./index-TSIf0hfv.js";import"./index-D64aoPmg.js";import"./useEventCallback-Bbz38unH.js";import"./SkeletonBar-DZ3fNMsI.js";import"./LoadingCell-bn0z-gtJ.js";import"./ColumnConfigDialog-CXqm1Z_S.js";import"./DraggableList-CJCY8max.js";import"./search-BOgD6jUI.js";import"./Input-Cs47mLOC.js";import"./useControlled-EZBO8tge.js";import"./Button-D_UOXx3n.js";import"./small-cross-GUXRAdAn.js";import"./ActionButton-BjnG2AJb.js";import"./Checkbox-CF2-HhjI.js";import"./useValueChanged-C708bQfP.js";import"./CollapsiblePanel-C0WuBQuO.js";import"./MultiColumnSortDialog-BUuWI7HK.js";import"./MenuTrigger-CaeYiSBF.js";import"./CompositeItem-DgGcGQW6.js";import"./ToolbarRootContext-DLHGbFy6.js";import"./getDisabledMountTransitionStyles-KvK7cGgY.js";import"./getPseudoElementBounds-_CZkfBpK.js";import"./chevron-down-BpoIGC6g.js";import"./index-2SXn5UAQ.js";import"./error-D43b2FyI.js";import"./BaseCbacBanner-B7t9tKYP.js";import"./makeExternalStore-Ckpy9L-L.js";import"./Tooltip-DRsiLNea.js";import"./PopoverPopup-sChDPaWB.js";import"./debounce-4zT3h9WK.js";import"./useOsdkClient-B1Wf-t7W.js";import"./tick-MF5FreoB.js";import"./DropdownField-BMcpUr4D.js";import"./isEqual-7hCELrMd.js";import"./withOsdkMetrics-uBYACZNa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
