import{j as i}from"./iframe-DHvAViPR.js";import{O as p}from"./object-table-D-9flvkC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BL2HFJsV.js";import"./preload-helper-Dr0qt1Io.js";import"./Table-FpwJusy2.js";import"./index-Bu8HbTmD.js";import"./Dialog-CW9JkQdy.js";import"./cross-jMdHsiQa.js";import"./svgIconContainer-DlMS91CX.js";import"./useBaseUiId-DC8JngT2.js";import"./InternalBackdrop-DocgtOsD.js";import"./composite-BqPomtbs.js";import"./index-C-uf0j7T.js";import"./index-BK9f1euG.js";import"./index-C0SFg9My.js";import"./useEventCallback-Mkp6eG4i.js";import"./SkeletonBar-CWpkfD4i.js";import"./LoadingCell-zT2gHZcw.js";import"./ColumnConfigDialog-BtvhjzuN.js";import"./DraggableList-CSoZ-IJ0.js";import"./search-CslhogKf.js";import"./Input-BahMzRfS.js";import"./useControlled-DhJY5-ob.js";import"./isEqual-BF6ez8mI.js";import"./isObject-DN-_A1Sa.js";import"./Button-CRVZcrRv.js";import"./ActionButton-C21ouRUL.js";import"./Checkbox-DwtHAgLP.js";import"./useValueChanged-BPn_zts2.js";import"./CollapsiblePanel-oahSC77k.js";import"./MultiColumnSortDialog-CCYfQtt4.js";import"./MenuTrigger-BS7gNlfS.js";import"./CompositeItem-DFHh1YHK.js";import"./ToolbarRootContext-D6av5NKs.js";import"./getDisabledMountTransitionStyles-Cm1DkgqH.js";import"./getPseudoElementBounds-BVHhalps.js";import"./chevron-down-m5ZtkVRt.js";import"./index-CFJ8T4c9.js";import"./error-ChBbUgez.js";import"./BaseCbacBanner-Dp4nf7jM.js";import"./makeExternalStore-hiekBPtY.js";import"./Tooltip-D-DaL636.js";import"./PopoverPopup-CQo59VTy.js";import"./toNumber-DrkGwxOv.js";import"./useOsdkClient-CHv6FTUh.js";import"./tick-CdE1sA9u.js";import"./DropdownField-KeSCUBSh.js";import"./withOsdkMetrics-CU3cEKz5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
