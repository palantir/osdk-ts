import{j as i}from"./iframe-BoMYVZ8P.js";import{O as p}from"./object-table-Co3y61KL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Y9SNabI4.js";import"./preload-helper-BK2UTj0g.js";import"./Table-XGt5dfzF.js";import"./index-CWGS1jbk.js";import"./Dialog-dGxgbeh7.js";import"./cross-C8gHFhcw.js";import"./svgIconContainer-BVTvLC-e.js";import"./useBaseUiId-B21DQZ5t.js";import"./InternalBackdrop-B8fkQuwz.js";import"./composite-KNqjoGAg.js";import"./index-BhWLpeRw.js";import"./index-ClsDrsL5.js";import"./index-BUL6qdYX.js";import"./useEventCallback-CE7eeu8C.js";import"./SkeletonBar-Dv0Y2UuW.js";import"./LoadingCell-DFwTonfQ.js";import"./ColumnConfigDialog-Ck894DdU.js";import"./DraggableList-Cnf7C36G.js";import"./search-DXLrUQjP.js";import"./Input-BTERu37S.js";import"./useControlled-5CvF-qs0.js";import"./Button-B6yMNcTW.js";import"./small-cross-BlU6xsJJ.js";import"./ActionButton-BBxv047F.js";import"./Checkbox-f9_0ybPg.js";import"./useValueChanged-ZQkTxx0f.js";import"./CollapsiblePanel-DyxxtPmZ.js";import"./MultiColumnSortDialog-k7xUY6Eq.js";import"./MenuTrigger-C5KjlB94.js";import"./CompositeItem-Dh_pkc7t.js";import"./ToolbarRootContext-vNggTixJ.js";import"./getDisabledMountTransitionStyles-2namnzPQ.js";import"./getPseudoElementBounds-CjFtrMwo.js";import"./chevron-down-xbPqDJA1.js";import"./index-XV4DS-Dv.js";import"./error-6dVeQLZ0.js";import"./BaseCbacBanner-9RL_iOqo.js";import"./makeExternalStore-DnUcW7Zh.js";import"./Tooltip-DmCHNO1q.js";import"./PopoverPopup-Cj48muFO.js";import"./debounce-CQ_hqDhi.js";import"./useOsdkClient-C2JlPVLC.js";import"./tick-Ci6gbHCk.js";import"./DropdownField-B_NajMDf.js";import"./isEqual-DBIn-C9s.js";import"./withOsdkMetrics-DqIIQvI6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
