import{j as i}from"./iframe-BVAvsfQX.js";import{O as p}from"./object-table-Dcp3caS0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BdVcP8tL.js";import"./preload-helper-BwI1TZkb.js";import"./Table-B8xS_JYn.js";import"./index-NhX7SFCA.js";import"./Dialog-BpMcAwvr.js";import"./cross-Blq0AAlZ.js";import"./svgIconContainer-DA2Ye4kw.js";import"./useBaseUiId-DNCMaGc4.js";import"./InternalBackdrop-g-81w1St.js";import"./composite-BKwa0sk2.js";import"./index-Pg5rWMVo.js";import"./index-CZLwJ3bI.js";import"./index-BJ2oEUUj.js";import"./useEventCallback-C4ornPn2.js";import"./SkeletonBar-DYwulvoN.js";import"./LoadingCell-4MxdDazL.js";import"./ColumnConfigDialog-Bg8vrAAB.js";import"./DraggableList-Bs_aQGMP.js";import"./search-YL3_raLw.js";import"./Input-BfbcPKto.js";import"./useControlled-DefMg-iO.js";import"./Button-D9hGt4n3.js";import"./small-cross-BrjbfiK5.js";import"./ActionButton-CMgl13ip.js";import"./Checkbox-AIFcaKS1.js";import"./useValueChanged-zCOkAJVd.js";import"./CollapsiblePanel-DwqNttW-.js";import"./MultiColumnSortDialog-CDHvLDDl.js";import"./MenuTrigger-BhaD-vDL.js";import"./CompositeItem-D1GzGip_.js";import"./ToolbarRootContext-mIzgtd8o.js";import"./getDisabledMountTransitionStyles-CdUsfYUG.js";import"./getPseudoElementBounds-Ck3Ae6Ob.js";import"./chevron-down-D9zeVubV.js";import"./index-CsgPrkQT.js";import"./error-CpL1Ts52.js";import"./BaseCbacBanner-DoSfNXki.js";import"./makeExternalStore-DKjKjidO.js";import"./Tooltip-BbaWMbEy.js";import"./PopoverPopup-Dz7DrwBi.js";import"./debounce-BC3Q5dHj.js";import"./useOsdkClient-DWFkG0k-.js";import"./tick-BntO4w-h.js";import"./DropdownField-C1-i9ZLz.js";import"./isEqual-4IX44eeH.js";import"./withOsdkMetrics-DEQFwLuz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
