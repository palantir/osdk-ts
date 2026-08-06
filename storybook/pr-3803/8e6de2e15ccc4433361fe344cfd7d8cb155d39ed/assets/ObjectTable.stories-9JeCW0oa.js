import{j as i}from"./iframe-DvFHgo-w.js";import{O as p}from"./object-table-Bpvq3r6J.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DWhvOO-b.js";import"./preload-helper-DZBzpRSG.js";import"./Table-XamTJzer.js";import"./index-ChNfdrgg.js";import"./Dialog-IHlWMBtY.js";import"./cross-DFuwFxaR.js";import"./svgIconContainer-DkmBAWI4.js";import"./useBaseUiId-Cihl7qhL.js";import"./InternalBackdrop-CxHwCrRD.js";import"./composite-btXM50Z8.js";import"./index-DmnXV9iA.js";import"./index-CHdUuSLF.js";import"./index-BBJBZUVP.js";import"./useEventCallback-CjzJPV8w.js";import"./SkeletonBar-K9w0OW_M.js";import"./LoadingCell-BuEuuL24.js";import"./ColumnConfigDialog-JNJ9PysK.js";import"./DraggableList-DPMyKnoA.js";import"./search-DGnENIqF.js";import"./Input-Dj67-Kk5.js";import"./useControlled-B1Ceoypd.js";import"./isEqual-CDhU7mjX.js";import"./isObject-BAFCTc-o.js";import"./Button-KyTimgm1.js";import"./ActionButton-Cgv_I3G1.js";import"./Checkbox-TcgZHOqM.js";import"./useValueChanged-DtlQijU6.js";import"./CollapsiblePanel-BI4Hwsiz.js";import"./MultiColumnSortDialog-DqGFzRPB.js";import"./MenuTrigger-ClHfegt_.js";import"./CompositeItem-CRFhwAMt.js";import"./ToolbarRootContext-BYIu0onP.js";import"./getDisabledMountTransitionStyles-BoeOMGGq.js";import"./getPseudoElementBounds-ZFE8fkVM.js";import"./chevron-down-CQiqre5K.js";import"./index-BtbK7qTH.js";import"./error-CuZ6e4Lo.js";import"./BaseCbacBanner-DkuvZFbJ.js";import"./makeExternalStore-N_K02grM.js";import"./Tooltip-B_ZOzs7F.js";import"./PopoverPopup-DLLk2q3N.js";import"./toNumber-ByPSC-tB.js";import"./useOsdkClient-BlFqS2fR.js";import"./tick-DVnP0HcX.js";import"./DropdownField-ptwTRj3O.js";import"./withOsdkMetrics-B88V5tRU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
