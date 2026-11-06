import{j as i}from"./iframe-D8PhF-eH.js";import{O as p}from"./object-table-QJ3HK8Pr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-dkSFYL.js";import"./preload-helper-BAjhLXlD.js";import"./Table-CcECbzZu.js";import"./index-GeJSxn-b.js";import"./Dialog-C7slmPym.js";import"./cross-B-SWIjS0.js";import"./svgIconContainer-B9myFr8z.js";import"./useBaseUiId-B7vHmMIX.js";import"./InternalBackdrop-CDjt8EEZ.js";import"./composite-D3ANHq5C.js";import"./index-BjXCP1BI.js";import"./index-C2YCUhpZ.js";import"./index-2ug0u_LS.js";import"./useEventCallback-ajaCVaB8.js";import"./SkeletonBar-CAeyHB0y.js";import"./LoadingCell-D3HWPBCC.js";import"./ColumnConfigDialog-Ba_XCAXP.js";import"./DraggableList-DIfW0b4S.js";import"./search-CFo5JCpY.js";import"./Input-BVLD4pm0.js";import"./useControlled-Bb2LNbVb.js";import"./Button-DJIgkoJK.js";import"./small-cross-BD-mjh3z.js";import"./ActionButton-fOJ3EwAB.js";import"./Checkbox-bKsOVh7f.js";import"./useValueChanged-ByyRkrNk.js";import"./CollapsiblePanel-D_tXI55U.js";import"./MultiColumnSortDialog-CivCxfQ-.js";import"./MenuTrigger-CTHzCvWg.js";import"./CompositeItem-hs5t7L4r.js";import"./ToolbarRootContext-CfxpKT0G.js";import"./getDisabledMountTransitionStyles-CooKzbU3.js";import"./getPseudoElementBounds-BQakqMd3.js";import"./chevron-down-egnrEsvE.js";import"./index-3jm-2kpZ.js";import"./error-odhwE47h.js";import"./BaseCbacBanner-BLVhN8ZM.js";import"./makeExternalStore-XQeLMI6O.js";import"./Tooltip-BhGdix3S.js";import"./isObject-Ebfvx2IJ.js";import"./debounce-DR7aSozX.js";import"./useOsdkClient-Bm-QDIWM.js";import"./tick-ChgibA9T.js";import"./DropdownField-D1QY-U9Y.js";import"./isEqual-C80WN2k0.js";import"./_baseIsEqual-3sETV58K.js";import"./withOsdkMetrics-BIKp0vOQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
