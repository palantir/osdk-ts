import{j as i}from"./iframe-B-JTL6t_.js";import{O as p}from"./object-table-FNJFEKEW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D2vyNiNQ.js";import"./preload-helper-DJ_hAMVg.js";import"./Table-Dg7aaslH.js";import"./index-BVBufCln.js";import"./Dialog-WOLPrhdU.js";import"./cross-3QOYISjX.js";import"./svgIconContainer-CiyL_qiy.js";import"./useBaseUiId-CUEnf41u.js";import"./InternalBackdrop-DjxTY25E.js";import"./composite-VcmuBxGV.js";import"./index-BA2SfPb-.js";import"./index-D9XzKchN.js";import"./index-VPeaEhQ2.js";import"./useEventCallback-ChtJeHxU.js";import"./SkeletonBar-DXHB1vtB.js";import"./LoadingCell-CPyzJPjv.js";import"./ColumnConfigDialog-DLNzwBWy.js";import"./DraggableList-C2RirL5h.js";import"./search-CU5MGZ4i.js";import"./Input-BaVlDPE6.js";import"./useControlled-ATGUHDV2.js";import"./isEqual-BSpE638U.js";import"./isObject-D90CYxLm.js";import"./Button-BlExWpZe.js";import"./ActionButton-L1IYyJOK.js";import"./Checkbox-Dr1WIlPV.js";import"./useValueChanged-ZCwCC8lo.js";import"./CollapsiblePanel-u1hLg1cv.js";import"./MultiColumnSortDialog-BU3jZhRe.js";import"./MenuTrigger-BaCTkUfs.js";import"./CompositeItem-DdntBB6P.js";import"./ToolbarRootContext-JmY-spmC.js";import"./getDisabledMountTransitionStyles-DZYVkC85.js";import"./getPseudoElementBounds-DswZmhB0.js";import"./chevron-down-BU52dZSy.js";import"./index-B57PfW1U.js";import"./error-CRuUFItf.js";import"./BaseCbacBanner-B6ISRA4O.js";import"./makeExternalStore-CdrDMmD2.js";import"./Tooltip-DgWDKpH1.js";import"./PopoverPopup-B7Sonn9Z.js";import"./toNumber-BYWFkk3t.js";import"./useOsdkClient-DcpOzUwu.js";import"./tick-BpWGEPsZ.js";import"./DropdownField--LFlJ0eP.js";import"./withOsdkMetrics-DmIxOOZN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
