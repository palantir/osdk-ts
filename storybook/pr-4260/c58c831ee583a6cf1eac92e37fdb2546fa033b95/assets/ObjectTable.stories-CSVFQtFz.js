import{j as i}from"./iframe-BC4WuJqp.js";import{O as p}from"./object-table-oOquejpx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DqpUxJ1m.js";import"./preload-helper-BAlIbckl.js";import"./Table-154Fyxjs.js";import"./index-B64lxDBz.js";import"./Dialog-k0Ije6H7.js";import"./cross-6e8uCbEq.js";import"./svgIconContainer-CtvZ0OgY.js";import"./useBaseUiId-BVMrMyXc.js";import"./InternalBackdrop-BZc_LEAU.js";import"./composite-DeP2Ikxo.js";import"./index-BUFQlA2h.js";import"./index-eKZRvGXM.js";import"./index-BhHb9YgN.js";import"./useEventCallback-Ds74rybS.js";import"./SkeletonBar-DqiJ0KmM.js";import"./LoadingCell-ClF_w2Fd.js";import"./ColumnConfigDialog-vjRm2gUc.js";import"./DraggableList-CzeeMf1J.js";import"./search-CZ3TYav-.js";import"./Input-CzEl6QGc.js";import"./useControlled-Bs5VhBCJ.js";import"./Button-DHdZg685.js";import"./small-cross-CZLtYA5e.js";import"./ActionButton-C8vwMbni.js";import"./Checkbox-B3I0XikT.js";import"./useValueChanged-CxYsqBM1.js";import"./CollapsiblePanel-BoiujEbx.js";import"./MultiColumnSortDialog-Bsaqrv5P.js";import"./MenuTrigger-CD0FBspH.js";import"./CompositeItem-B3C6p1hy.js";import"./ToolbarRootContext-c4Ndu606.js";import"./getDisabledMountTransitionStyles-Dtsx70hN.js";import"./getPseudoElementBounds-D1ccQnN_.js";import"./chevron-down-Cl_Af1LQ.js";import"./index-Cd4zCzRN.js";import"./error-GVs8VSV-.js";import"./BaseCbacBanner-DVAbPDy9.js";import"./makeExternalStore-DmNapAQ9.js";import"./Tooltip-vRgEuTXd.js";import"./PopoverPopup-ULbHIXSs.js";import"./debounce-iB-UnFsI.js";import"./useOsdkClient-BzNLqqlE.js";import"./tick-vowPK7v2.js";import"./DropdownField-BQyQM-0q.js";import"./isEqual-3vsRtdOf.js";import"./withOsdkMetrics-D1wQc1Iv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
