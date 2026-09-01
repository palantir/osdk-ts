import{j as i}from"./iframe-D7UfG5lN.js";import{O as p}from"./object-table-eNKoCF02.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BeAz5A3S.js";import"./preload-helper-fsR8YlZl.js";import"./Table-CsU_D9jD.js";import"./index-CX_4Y7_E.js";import"./Dialog-DSMt8zro.js";import"./cross-BqS1fcFn.js";import"./svgIconContainer-DJd8wnEJ.js";import"./useBaseUiId-DO-f1Z6D.js";import"./InternalBackdrop-BIiS9BIy.js";import"./composite-CgMpynF4.js";import"./index-lBcmGDx7.js";import"./index-F7_7yuPT.js";import"./index-Bvzrvbs2.js";import"./useEventCallback-qxrAFbQA.js";import"./SkeletonBar-B31eMzse.js";import"./LoadingCell-DfcZnJS5.js";import"./ColumnConfigDialog-W0ouTFm6.js";import"./DraggableList-B9ySW3pf.js";import"./search-DtcC4DIl.js";import"./Input-CWcjnHAg.js";import"./useControlled-9hlnEbGI.js";import"./Button-Bwe_2Hp9.js";import"./small-cross-ClVjQsKL.js";import"./ActionButton-bYa-rsQ8.js";import"./Checkbox-DjxkizG9.js";import"./useValueChanged-D2v-_P-u.js";import"./CollapsiblePanel-CVdAsYYQ.js";import"./MultiColumnSortDialog-7qmaHD4E.js";import"./MenuTrigger-CbkBKjZX.js";import"./CompositeItem-fbZDtKEs.js";import"./ToolbarRootContext-49Q9r-mz.js";import"./getDisabledMountTransitionStyles-B0aARxvK.js";import"./getPseudoElementBounds-COopDBiV.js";import"./chevron-down-6NKtD6R3.js";import"./index-C29X8ucR.js";import"./error-CNylSIIz.js";import"./BaseCbacBanner-DbAWaE4h.js";import"./makeExternalStore-CCIQpKDE.js";import"./Tooltip-Ab7jqY7P.js";import"./PopoverPopup-DMAHYwOJ.js";import"./debounce-DZ3i5AHh.js";import"./useOsdkClient-CzIUie5K.js";import"./tick-ZztQqfup.js";import"./DropdownField-D-knyklq.js";import"./isEqual-Cj0yvF_6.js";import"./withOsdkMetrics-C0ALIoPR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
