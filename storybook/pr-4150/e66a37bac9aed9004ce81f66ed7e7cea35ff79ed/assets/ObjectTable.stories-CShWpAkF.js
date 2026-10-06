import{j as i}from"./iframe-BZeHWWBM.js";import{O as p}from"./object-table-BhOtAktk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-NK1auhnV.js";import"./preload-helper-BMO_GDYl.js";import"./Table-CtpnQnFR.js";import"./index-BghiDG-K.js";import"./Dialog-uPbNDu_k.js";import"./cross-DAs0FyHT.js";import"./svgIconContainer-P70a1ca6.js";import"./useBaseUiId-DiD1p4wn.js";import"./InternalBackdrop-7kOTzaTU.js";import"./composite-BY8Pgpco.js";import"./index-ssl2u5fL.js";import"./index-Demepb3A.js";import"./index-CDPIdeSA.js";import"./useEventCallback-CaF-XjRW.js";import"./SkeletonBar-O3cIgH1_.js";import"./LoadingCell-CX4SJ0pd.js";import"./ColumnConfigDialog-TDJ6XF0y.js";import"./DraggableList-D2VIARNN.js";import"./search-MR2i21ku.js";import"./Input-d8OQBydu.js";import"./useControlled-BuZ3yaTV.js";import"./Button-SYhaaomn.js";import"./small-cross-dSt8HMXx.js";import"./ActionButton-D2_3iW1e.js";import"./Checkbox-Iu5XV1tF.js";import"./useValueChanged-DSSRu0uz.js";import"./CollapsiblePanel-CXOTz_Ao.js";import"./MultiColumnSortDialog-Cl10cEik.js";import"./MenuTrigger-CiQc6kqu.js";import"./CompositeItem-DFk3jTw_.js";import"./ToolbarRootContext-Uoj_ihh4.js";import"./getDisabledMountTransitionStyles-CzV6u0eN.js";import"./getPseudoElementBounds-BoNdsgY-.js";import"./chevron-down-C-j3k1fh.js";import"./index-DA_WNnQg.js";import"./error-Bpqu1oQt.js";import"./BaseCbacBanner-BguiVkKO.js";import"./makeExternalStore-COW8GNP_.js";import"./Tooltip-gQ7xzq_d.js";import"./PopoverPopup-DUzxW_R3.js";import"./debounce-cOw_HdqP.js";import"./useOsdkClient-GuN9YFRq.js";import"./tick-DpfMUnCE.js";import"./DropdownField-D8jUrmhI.js";import"./isEqual-DF9bsTAI.js";import"./withOsdkMetrics-BwLrqkyr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
