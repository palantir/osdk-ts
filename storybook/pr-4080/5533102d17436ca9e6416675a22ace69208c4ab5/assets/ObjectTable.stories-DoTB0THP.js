import{j as i}from"./iframe-C3xC__LU.js";import{O as p}from"./object-table-DkYzXbd6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CyjfgPaS.js";import"./preload-helper-DxYa6wnu.js";import"./Table-BAV7undJ.js";import"./index-Bdy1H0uO.js";import"./Dialog-5SNzSg7r.js";import"./cross-DTsmRRZf.js";import"./svgIconContainer-Bfm1ZKMl.js";import"./useBaseUiId-DfXUpmNo.js";import"./InternalBackdrop-DDB1NqHl.js";import"./composite-DEhtrm_a.js";import"./index-BC4cspOB.js";import"./index-5F-Zydov.js";import"./index-h0dbL0ga.js";import"./useEventCallback-YKLGG8r3.js";import"./SkeletonBar-CEAqEMoY.js";import"./LoadingCell-C4RKxj_Q.js";import"./ColumnConfigDialog-IZf70LtJ.js";import"./DraggableList-znG0xmL3.js";import"./search-C7Klq3lR.js";import"./Input-CprSxKZD.js";import"./useControlled-D8jbflQz.js";import"./Button-CIfwAqPR.js";import"./small-cross-N-4r5wTS.js";import"./ActionButton-CRT7rdtb.js";import"./Checkbox-DUlafT6w.js";import"./useValueChanged-DnBGnqXA.js";import"./CollapsiblePanel-BvlLag5C.js";import"./MultiColumnSortDialog-DqGtievi.js";import"./MenuTrigger-CvdSqop6.js";import"./CompositeItem-BTSmeuTL.js";import"./ToolbarRootContext-Ciubtyo1.js";import"./getDisabledMountTransitionStyles-DAJs1DsQ.js";import"./getPseudoElementBounds-HE1LNCz1.js";import"./chevron-down-Cpgn36Ir.js";import"./index-DEH1lz3e.js";import"./error-CQKPevIq.js";import"./BaseCbacBanner-CsbEPIz4.js";import"./makeExternalStore-DlKuehqN.js";import"./Tooltip-CgkXmPE_.js";import"./PopoverPopup-Bkq0Fxyf.js";import"./debounce-Cq5z3UtH.js";import"./useOsdkClient-BT6MutGO.js";import"./tick-2Vgdfn-_.js";import"./DropdownField-Bvfem0KY.js";import"./isEqual-DMocQ3uq.js";import"./withOsdkMetrics-DD7JD0C1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
