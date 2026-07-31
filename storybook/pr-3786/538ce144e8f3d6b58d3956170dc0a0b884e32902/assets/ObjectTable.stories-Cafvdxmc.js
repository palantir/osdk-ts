import{j as i}from"./iframe-D73P9nKc.js";import{O as p}from"./object-table-DDqvLNxE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BcWDCRk9.js";import"./preload-helper-BjEBufMF.js";import"./Table-BHBf0L_f.js";import"./index-CirTIIDW.js";import"./Dialog-m199ipGj.js";import"./cross-Dfl2KnYN.js";import"./svgIconContainer-CeFk8pT0.js";import"./useBaseUiId-xBTezciU.js";import"./InternalBackdrop-BVJfWxPc.js";import"./composite-edjiBCvk.js";import"./index-Dwedegj9.js";import"./index-NbMM9cDd.js";import"./index-QCcRxAnf.js";import"./useEventCallback-DOriYqOq.js";import"./SkeletonBar-Cv3e0wLL.js";import"./LoadingCell-WHPSbxRg.js";import"./ColumnConfigDialog-D2gHivhl.js";import"./DraggableList-CRHesyr6.js";import"./search-Dt1g4XkD.js";import"./Input-DJcl3DDq.js";import"./useControlled-RQ2ruCMn.js";import"./isEqual-2gOc909M.js";import"./isObject-CtVfkhnM.js";import"./Button-C_5kgWUY.js";import"./ActionButton-BQDLzjtZ.js";import"./Checkbox-CiXlL5Oh.js";import"./useValueChanged-ClvfWRLt.js";import"./CollapsiblePanel-CvTWvEb4.js";import"./MultiColumnSortDialog-C2W3DrsM.js";import"./MenuTrigger-D3wbWLuX.js";import"./CompositeItem-Ppg2q6Wh.js";import"./ToolbarRootContext-DnVqj7ts.js";import"./getDisabledMountTransitionStyles-BbUkZFU7.js";import"./getPseudoElementBounds-2590HYt7.js";import"./chevron-down-WD0BiTuk.js";import"./index-gmmWqW7B.js";import"./error-CVdJWrUx.js";import"./BaseCbacBanner-sdzO2XYw.js";import"./makeExternalStore-fGwEBPTV.js";import"./Tooltip-BNbgTwM2.js";import"./PopoverPopup-7al-0CgW.js";import"./toNumber-DfL-jis5.js";import"./useOsdkClient-Ccg84nj2.js";import"./tick-CNHtCiCU.js";import"./DropdownField-DwRZbsmW.js";import"./withOsdkMetrics-BFaCjj6O.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
