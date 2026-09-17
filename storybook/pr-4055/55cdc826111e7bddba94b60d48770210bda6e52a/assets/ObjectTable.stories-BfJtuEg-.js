import{j as i}from"./iframe-DI00rnMc.js";import{O as p}from"./object-table-DCV7k42M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B-g4_RmW.js";import"./preload-helper-Bhha9UTp.js";import"./Table-xysYXERX.js";import"./index-Brq0evln.js";import"./Dialog-BGKWvYKg.js";import"./cross-6J7bJBxX.js";import"./svgIconContainer-DP5UNNJ5.js";import"./useBaseUiId-6U9MPwLo.js";import"./InternalBackdrop-5T5xbc5h.js";import"./composite-UOsa0WMB.js";import"./index-Chs62TH6.js";import"./index-Dd09UFHP.js";import"./index-BaR9V_cz.js";import"./useEventCallback-DlKWHTb3.js";import"./SkeletonBar-BMhplOL3.js";import"./LoadingCell-Cy3018Z9.js";import"./ColumnConfigDialog-CbzSqC-H.js";import"./DraggableList-CXvW5fS_.js";import"./search-D078c5Qn.js";import"./Input-5eKJv0PC.js";import"./useControlled-C2-apkIG.js";import"./Button-7EKbW6_f.js";import"./small-cross-W27oLZuH.js";import"./ActionButton-C53buHAy.js";import"./Checkbox-BuPcyFtO.js";import"./useValueChanged-Drw-qmtO.js";import"./CollapsiblePanel-DWSPG8Q_.js";import"./MultiColumnSortDialog-BRpxFD4d.js";import"./MenuTrigger-DY6AZSH4.js";import"./CompositeItem-PKIDUwep.js";import"./ToolbarRootContext-BVNpcmSf.js";import"./getDisabledMountTransitionStyles-DEsnJVLy.js";import"./getPseudoElementBounds-CdI2GVpp.js";import"./chevron-down-ihi9Dc4D.js";import"./index-D6jwq80D.js";import"./error-CCbSqJWm.js";import"./BaseCbacBanner-DPXH0tTQ.js";import"./makeExternalStore-qZ-zko2S.js";import"./Tooltip-ZhOYcscf.js";import"./PopoverPopup-DVqDwMCW.js";import"./debounce-DshZgGYh.js";import"./useOsdkClient-D1SRiVtj.js";import"./tick-Da1rXlTd.js";import"./DropdownField-uqgsMlJj.js";import"./isEqual-BbwTjB3b.js";import"./withOsdkMetrics-DT1mwdZ-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
