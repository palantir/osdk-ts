import{j as i}from"./iframe-DzWJ3tJf.js";import{O as p}from"./object-table-Bz7iI-Ye.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-u9jU6HBd.js";import"./preload-helper-D60YPggq.js";import"./Table-kkUhVBB4.js";import"./index-jOIP15Dj.js";import"./Dialog-BGlkMOOL.js";import"./cross-CpclAF39.js";import"./svgIconContainer-NZX5zwbB.js";import"./useBaseUiId-B7BFDCom.js";import"./InternalBackdrop-DYkGzRer.js";import"./composite-BZh-eCsQ.js";import"./index-5-fC0lD_.js";import"./index-CZtqhO_b.js";import"./index-D4IY10Gn.js";import"./useEventCallback-CJtsemMV.js";import"./SkeletonBar-yALHjeEw.js";import"./LoadingCell-CrXDNdvR.js";import"./ColumnConfigDialog-JdeCx5Rx.js";import"./DraggableList-Bfwp7m6u.js";import"./search-GiMpebUt.js";import"./Input-9_-rD_6K.js";import"./useControlled-Qbs937Ua.js";import"./isEqual-DVM9u0ca.js";import"./isObject-BW4wDRVi.js";import"./Button-CTXwYA6d.js";import"./ActionButton-BdKawUax.js";import"./Checkbox--cGklhAL.js";import"./useValueChanged-BM6Ovdpe.js";import"./CollapsiblePanel-A3vtgCY0.js";import"./MultiColumnSortDialog-8-MZXVTR.js";import"./MenuTrigger-CAT0S7Uy.js";import"./CompositeItem-0GMeUwly.js";import"./ToolbarRootContext-RU1iJIsp.js";import"./getDisabledMountTransitionStyles-DVYPlgOw.js";import"./getPseudoElementBounds-CcvyTIsc.js";import"./chevron-down-C0NNvCS6.js";import"./index-CQvM6UYi.js";import"./error-tOl4PAnV.js";import"./BaseCbacBanner-LabUHbFe.js";import"./makeExternalStore-BlWDQNcY.js";import"./Tooltip-CLCbAZyz.js";import"./PopoverPopup-DN7FD26Y.js";import"./debounce-AtIUE0wB.js";import"./useOsdkClient-D0kFz6Qn.js";import"./tick-BbVCke-v.js";import"./DropdownField-DZY8cIEo.js";import"./withOsdkMetrics-oZAeB24-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
