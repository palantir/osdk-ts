import{j as i}from"./iframe-Deq8U_R6.js";import{O as p}from"./object-table-Cpug1ggs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CwX9nkXH.js";import"./preload-helper-gHh2KtG1.js";import"./Table-DWbM6UyP.js";import"./index-DrQOBAHk.js";import"./Dialog-DeFeQfo-.js";import"./cross-CR8D9GYw.js";import"./svgIconContainer-Mlvk9_It.js";import"./useBaseUiId-BUXl0t0L.js";import"./InternalBackdrop-DBOPTR44.js";import"./composite-BNSug7gR.js";import"./index-BqwGDeu0.js";import"./index-DihHNdBD.js";import"./index-z73v20nY.js";import"./useEventCallback-Cg9CTnOy.js";import"./SkeletonBar-DEtf_a9V.js";import"./LoadingCell-poQ-JK4_.js";import"./ColumnConfigDialog-TFTfgcZL.js";import"./DraggableList-DF8fyUSQ.js";import"./search-YieMSLSV.js";import"./Input-BTtCqGCw.js";import"./useControlled-B13sGWuv.js";import"./Button-BwL9fd7Z.js";import"./small-cross-C_PTrjiz.js";import"./ActionButton-C0yk3VrH.js";import"./Checkbox-FT15qBLN.js";import"./useValueChanged-CP8dyd6H.js";import"./CollapsiblePanel-BPfxK78F.js";import"./MultiColumnSortDialog-DblIw7El.js";import"./MenuTrigger-C5F8Udzs.js";import"./CompositeItem-9mNZQz-k.js";import"./ToolbarRootContext-ujlL6MZj.js";import"./getDisabledMountTransitionStyles-BwqPeStH.js";import"./getPseudoElementBounds-ClknCJRS.js";import"./chevron-down-BX8QITO3.js";import"./index-B5E1rin5.js";import"./error-BGW1gWTs.js";import"./BaseCbacBanner-dwjT3eiM.js";import"./makeExternalStore-Da72kyzN.js";import"./Tooltip-CJe0q8p4.js";import"./PopoverPopup-7HBCutnS.js";import"./debounce-gp4V-tlI.js";import"./useOsdkClient-DilVQuXF.js";import"./tick-DGNSJeUo.js";import"./DropdownField-H5OdYZ1y.js";import"./isEqual-CbCFbLcE.js";import"./withOsdkMetrics-CHdYjQDf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
