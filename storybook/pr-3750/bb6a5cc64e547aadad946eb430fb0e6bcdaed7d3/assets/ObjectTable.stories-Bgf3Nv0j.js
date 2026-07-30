import{j as i}from"./iframe-CDdobGVl.js";import{O as p}from"./object-table-B8SkHDHc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1gk657q.js";import"./preload-helper-fzUqsnoB.js";import"./Table-1FYsJVtN.js";import"./index-UG7IPa_e.js";import"./Dialog-LmovP1r_.js";import"./cross-DCH_An2W.js";import"./svgIconContainer-CgDgIgq2.js";import"./useBaseUiId-DRnSBJCG.js";import"./InternalBackdrop-Dek1E__h.js";import"./composite-B7TSCQsg.js";import"./index-DuK41-3i.js";import"./index-DsQcLISu.js";import"./index-FQSBGRBE.js";import"./useEventCallback-Ci8wYTua.js";import"./SkeletonBar-aDjTru-v.js";import"./LoadingCell-DJLYTkxA.js";import"./ColumnConfigDialog-Bjj8AdKZ.js";import"./DraggableList-DRKr8B2k.js";import"./search-DhR-FEPU.js";import"./Input-B8c3wvNn.js";import"./useControlled-y0BuUqJ1.js";import"./isEqual-BrP0-CPc.js";import"./isObject-D1v0OFvi.js";import"./Button-DV2ka0Gf.js";import"./ActionButton-DAf9MUci.js";import"./Checkbox-BHRvrbWl.js";import"./useValueChanged-DqSkUFAq.js";import"./CollapsiblePanel-BLrbSiDi.js";import"./MultiColumnSortDialog-BQJL_SCe.js";import"./MenuTrigger-C9rAEmNL.js";import"./CompositeItem-BV2a_jIB.js";import"./ToolbarRootContext-eacV9sqC.js";import"./getDisabledMountTransitionStyles-DBakWkTZ.js";import"./getPseudoElementBounds-DjYJBVJl.js";import"./chevron-down-D3adfjjO.js";import"./index-Dtnd9Ao8.js";import"./error-CWlEyLzu.js";import"./BaseCbacBanner-DjgfQF4B.js";import"./makeExternalStore-BwTsluQv.js";import"./Tooltip-BUI5QaZR.js";import"./PopoverPopup-BVSi0AGn.js";import"./toNumber-BUnY8e99.js";import"./useOsdkClient-D640BFrj.js";import"./tick-D6gnufEx.js";import"./DropdownField-BRXshMDt.js";import"./withOsdkMetrics-B9eQL1mQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
