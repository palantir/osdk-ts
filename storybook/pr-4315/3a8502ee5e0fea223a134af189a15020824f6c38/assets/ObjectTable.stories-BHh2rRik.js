import{j as i}from"./iframe-BITxIQXM.js";import{O as p}from"./object-table-CegXVBry.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DBBQwf9s.js";import"./preload-helper-CJCZF6BK.js";import"./Table-C1h4u2VM.js";import"./index-BXV9FcBB.js";import"./Dialog-DntjnMef.js";import"./cross-DYXRPDx7.js";import"./svgIconContainer-4yskBugb.js";import"./useBaseUiId-DoTbd__l.js";import"./InternalBackdrop-DCrVf-EE.js";import"./composite-CqBnb1yV.js";import"./index-UMWtaZVa.js";import"./index-DQpYD4zL.js";import"./index-EOsqRXOu.js";import"./useEventCallback-DZfqIGxY.js";import"./SkeletonBar-DV7HgVRJ.js";import"./LoadingCell-BgiGg-3m.js";import"./ColumnConfigDialog-C7ESb4to.js";import"./DraggableList-txyAYhFd.js";import"./search-Bb0Ck9Ps.js";import"./Input-DB8ShKaf.js";import"./useControlled-Yy2fJI9L.js";import"./Button-CrhbLtNZ.js";import"./small-cross-GSrdzjDe.js";import"./ActionButton-D5dP9TnG.js";import"./Checkbox-DTkNiB8m.js";import"./useValueChanged-CTDlXj4Q.js";import"./CollapsiblePanel-Bo_h6-tV.js";import"./MultiColumnSortDialog-B7VJTi5T.js";import"./MenuTrigger-uMYu-NiS.js";import"./CompositeItem-TvjrH8CY.js";import"./ToolbarRootContext-Ddl053qU.js";import"./getDisabledMountTransitionStyles-Dp8AXCtE.js";import"./getPseudoElementBounds-BjyRTRRW.js";import"./chevron-down-DVE6tSD6.js";import"./index-DoQAUbhM.js";import"./error-DxPjfWes.js";import"./BaseCbacBanner-DXyBf0Bn.js";import"./makeExternalStore-C_t-r-t8.js";import"./Tooltip-BAiOzlh0.js";import"./PopoverPopup-PaNaO8o5.js";import"./debounce-BArBmm9m.js";import"./useOsdkClient-_qIeBz6R.js";import"./tick-Bshl7dq7.js";import"./DropdownField-8NieERJz.js";import"./isEqual-CmQgkTco.js";import"./withOsdkMetrics-B04gc41f.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
