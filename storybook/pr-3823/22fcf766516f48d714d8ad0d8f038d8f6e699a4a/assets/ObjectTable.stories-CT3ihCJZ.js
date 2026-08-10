import{j as i}from"./iframe-CqtM1m66.js";import{O as p}from"./object-table-OQuwVmcB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7EeAiEFB.js";import"./preload-helper-8QenNoR3.js";import"./Table-qwyiPYYw.js";import"./index-Bm_s2cXS.js";import"./Dialog-CSPUFl_a.js";import"./cross-C3WCxJ7o.js";import"./svgIconContainer-0xugvUkl.js";import"./useBaseUiId-CNCxgIcO.js";import"./InternalBackdrop-r_3np2IB.js";import"./composite-BQCFMfMu.js";import"./index-Cj6SM7QT.js";import"./index-CmmulGo1.js";import"./index-PCnTVNS9.js";import"./useEventCallback-BbhjdoVV.js";import"./SkeletonBar-fH_qPdXK.js";import"./LoadingCell-BN3UNpFq.js";import"./ColumnConfigDialog-DGLmDR-C.js";import"./DraggableList-Dv3b-eOY.js";import"./search-DngCEFEh.js";import"./Input-pOGeWJ3Y.js";import"./useControlled--_m8dGzA.js";import"./isEqual-4O_a_wX6.js";import"./isObject-BljNoYab.js";import"./Button-B1BjSWNJ.js";import"./ActionButton-DCQBGKJH.js";import"./Checkbox-DvuwVqie.js";import"./useValueChanged-BkswtpC5.js";import"./CollapsiblePanel-3UPy_d8J.js";import"./MultiColumnSortDialog-CvLj9uUV.js";import"./MenuTrigger-7wwRSkel.js";import"./CompositeItem-BtfVG94N.js";import"./ToolbarRootContext-VqVmAPVb.js";import"./getDisabledMountTransitionStyles-DISBXdqI.js";import"./getPseudoElementBounds-Bgz2B9H-.js";import"./chevron-down-Bj4cqrv5.js";import"./index-Dfnjwbay.js";import"./error-CT_OGppP.js";import"./BaseCbacBanner-C4J61rco.js";import"./makeExternalStore-BPqGMrvG.js";import"./Tooltip-LCdeEWNM.js";import"./PopoverPopup-mInHJr4w.js";import"./toNumber-CHyK8yhn.js";import"./useOsdkClient-Cz5O4Q4G.js";import"./tick-CQviu8rF.js";import"./DropdownField-CRwxEekd.js";import"./withOsdkMetrics-BONS1yzE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
