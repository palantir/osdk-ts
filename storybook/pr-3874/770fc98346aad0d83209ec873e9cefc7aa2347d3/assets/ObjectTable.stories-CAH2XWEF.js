import{j as i}from"./iframe-UkB5vgVG.js";import{O as p}from"./object-table--6JN6yLk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D1ZHUy3z.js";import"./preload-helper-CVf8llwS.js";import"./Table-CjCohFn6.js";import"./index-qp1j7wJC.js";import"./Dialog-CZ_x9J9x.js";import"./cross-BdVzNhJI.js";import"./svgIconContainer-DayxyL3r.js";import"./useBaseUiId-Dn0EoDTA.js";import"./InternalBackdrop-C7U9xWxA.js";import"./composite-BGwzEdrp.js";import"./index-Bi4xYXRw.js";import"./index-e4diuhxy.js";import"./index-DfHcWnOV.js";import"./useEventCallback-Ct4SjjN5.js";import"./SkeletonBar-jc8wsvoD.js";import"./LoadingCell-Drwaf3vU.js";import"./ColumnConfigDialog-DICfUWLH.js";import"./DraggableList-DezpGo4i.js";import"./search-CsKKjabz.js";import"./Input-CB29R5Tw.js";import"./useControlled-Clgvd4Wq.js";import"./Button-C-9R3Dge.js";import"./small-cross-BhTFlBDt.js";import"./ActionButton-gCoOaLsR.js";import"./Checkbox-D2_TGGsM.js";import"./useValueChanged-8upR9kV4.js";import"./CollapsiblePanel-OMF1Q75F.js";import"./MultiColumnSortDialog-COAhezi2.js";import"./MenuTrigger-qboTs4ql.js";import"./CompositeItem-UlYd9APp.js";import"./ToolbarRootContext-m-lFbgU6.js";import"./getDisabledMountTransitionStyles-B6fypB_z.js";import"./getPseudoElementBounds-BaPROP5U.js";import"./chevron-down-CKWbFOWn.js";import"./index-CLbtj4dS.js";import"./error-uoew32RU.js";import"./BaseCbacBanner-C9O888Wq.js";import"./makeExternalStore-B3cxenBa.js";import"./Tooltip-BGpYaoin.js";import"./PopoverPopup-CiCjFpg3.js";import"./debounce-OlKnPm4h.js";import"./useOsdkClient-CN5kE_kM.js";import"./tick-Blswzu6W.js";import"./DropdownField-8gcZzb7t.js";import"./isEqual-J8qJ1onM.js";import"./withOsdkMetrics-dDcxjbTR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
