import{j as i}from"./iframe-CQJeOMd0.js";import{O as p}from"./object-table-BaogrCgp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B31Uq6rG.js";import"./preload-helper-DYgGZ5xf.js";import"./Table-ByZuZRpi.js";import"./index-ZrJt1iGx.js";import"./Dialog-DuFQkJ75.js";import"./cross-DwSzg9Eu.js";import"./svgIconContainer-By2ff4hT.js";import"./useBaseUiId-UYsDOBIH.js";import"./InternalBackdrop-CKGnsbEW.js";import"./composite-B-fR2hSY.js";import"./index-Bfc4h_Hy.js";import"./index-CazEHWy5.js";import"./index-CbOC1UiM.js";import"./useEventCallback-4rx4kNgb.js";import"./SkeletonBar-CJs85s_z.js";import"./LoadingCell-CYH9nq0A.js";import"./ColumnConfigDialog-BNs0bEEk.js";import"./DraggableList-BfqmQOLq.js";import"./search-CdEhbnO_.js";import"./Input-D3KZDZ9i.js";import"./useControlled-DiW8shJx.js";import"./Button-CNntGJtS.js";import"./small-cross-CMRpYjz3.js";import"./ActionButton-C2rYN8Vu.js";import"./Checkbox-D0poUwAI.js";import"./useValueChanged-Ou9HudZH.js";import"./CollapsiblePanel-VDI8WSX1.js";import"./MultiColumnSortDialog-BfrQpE1H.js";import"./MenuTrigger-CvrPqGqN.js";import"./CompositeItem-BlyLfX91.js";import"./ToolbarRootContext-BZfxaQ_Q.js";import"./getDisabledMountTransitionStyles-DrAx-qMj.js";import"./getPseudoElementBounds-Pki9YJrO.js";import"./chevron-down-BsREGsZS.js";import"./index-DTaUM21t.js";import"./error-pXwI3jKa.js";import"./BaseCbacBanner-0YdtQ9d0.js";import"./makeExternalStore-D7pp3thE.js";import"./Tooltip-tmOp52T4.js";import"./PopoverPopup-huW2-2Wz.js";import"./debounce-Bq_e46wp.js";import"./useOsdkClient-DTbHiSsE.js";import"./tick-hTuAcIOp.js";import"./DropdownField-BCiB5LRe.js";import"./isEqual-DokZbVzi.js";import"./withOsdkMetrics-BvV17iLP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
