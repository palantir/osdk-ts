import{j as i}from"./iframe-SQbFhZ3c.js";import{O as p}from"./object-table-DO022oJ3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bk8jLc1d.js";import"./preload-helper-Bk8HE262.js";import"./Table-Dn2-WyOU.js";import"./index-DFG7WYoY.js";import"./Dialog-BksF8woT.js";import"./cross-DUHf3Xi-.js";import"./svgIconContainer-DpbMU5PI.js";import"./useBaseUiId-48FpeFM-.js";import"./InternalBackdrop-hdjBgUEf.js";import"./composite-A_HFMc3o.js";import"./index-DhCXsyWo.js";import"./index-DMJ3tVV7.js";import"./index-DaNwYb6O.js";import"./useEventCallback-CPy3Rkd8.js";import"./SkeletonBar-DzQSmgEp.js";import"./LoadingCell-Bih4q95e.js";import"./ColumnConfigDialog-BXFmAyqX.js";import"./DraggableList-CCIOiDz1.js";import"./search-Dv1CXcia.js";import"./Input-egVrdWvR.js";import"./useControlled-D7ywdRLy.js";import"./Button-CFQTwDbl.js";import"./small-cross-BdGuSKTr.js";import"./ActionButton-CZMeSJZL.js";import"./Checkbox-FTHcd1Q_.js";import"./useValueChanged-DOIbdOz8.js";import"./CollapsiblePanel-ZM6dC_qz.js";import"./MultiColumnSortDialog-BmhAx4WI.js";import"./MenuTrigger-B12dsoMz.js";import"./CompositeItem-Ddktyv2i.js";import"./ToolbarRootContext-BzTAPp2U.js";import"./getDisabledMountTransitionStyles-tIoM-SpH.js";import"./getPseudoElementBounds-BpCgKkH2.js";import"./chevron-down-BXSL_Za9.js";import"./index-B7SqLSeR.js";import"./error-cnAgyc_T.js";import"./BaseCbacBanner-BpCrbMvl.js";import"./makeExternalStore-BRt0pXTA.js";import"./Tooltip-5R-f9FdW.js";import"./PopoverPopup-4HlQ8QLc.js";import"./debounce-Lo5bZANl.js";import"./useOsdkClient-B7RtKw1R.js";import"./tick-R0brawEL.js";import"./DropdownField-zLTrjKWE.js";import"./isEqual-puOqvCFK.js";import"./withOsdkMetrics-C4ZNcPUI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
