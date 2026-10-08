import{j as i}from"./iframe-Cuh-yC9g.js";import{O as p}from"./object-table-wHVrjsXR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CXHa78SC.js";import"./preload-helper-Co1xc5DN.js";import"./Table-BOCORQWQ.js";import"./index-DWUob4WV.js";import"./Dialog-CLhnFK8s.js";import"./cross-BjB39GcZ.js";import"./svgIconContainer-GL6glClw.js";import"./useBaseUiId-Czk2OPtm.js";import"./InternalBackdrop-C4Ajfn1E.js";import"./composite-BCtP-Clm.js";import"./index-3lcaIBPr.js";import"./index-wPALhrfN.js";import"./index-JbFM852B.js";import"./useEventCallback-DUCHvBP3.js";import"./SkeletonBar-AJdj2On-.js";import"./LoadingCell-JuUg-bDY.js";import"./ColumnConfigDialog-B71UfVu_.js";import"./DraggableList-1zBnwzrY.js";import"./search-B0_wC5Cw.js";import"./Input-LmihMdos.js";import"./useControlled-7KsxQpTK.js";import"./Button-B6v4dcvN.js";import"./small-cross-DgWoWQa5.js";import"./ActionButton-DA-iy0n8.js";import"./Checkbox-B1OLVDGO.js";import"./useValueChanged-DOSJ9FDd.js";import"./CollapsiblePanel-DzmzUJIf.js";import"./MultiColumnSortDialog-CbojQAM1.js";import"./MenuTrigger-BHBZAP5o.js";import"./CompositeItem-BJ_X-ts8.js";import"./ToolbarRootContext-D0bBBUnA.js";import"./getDisabledMountTransitionStyles-Cia47Kmq.js";import"./getPseudoElementBounds-9rPRi8u7.js";import"./chevron-down-Bl1gRnzA.js";import"./index-EP_PqEfu.js";import"./error-0z2irTLT.js";import"./BaseCbacBanner-Bnl6rnI0.js";import"./makeExternalStore-BdhPqHms.js";import"./Tooltip-DSUYLnJr.js";import"./PopoverPopup-COd_DNnA.js";import"./debounce-CQG_FcjT.js";import"./useOsdkClient-0vYp7gi6.js";import"./tick-0nIkpLfk.js";import"./DropdownField-jqoPL6Hs.js";import"./isEqual-BzyRIl74.js";import"./withOsdkMetrics-2__WXqYS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
