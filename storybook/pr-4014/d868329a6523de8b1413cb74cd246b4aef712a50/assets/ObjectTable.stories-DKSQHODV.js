import{j as i}from"./iframe-DUUN6t7i.js";import{O as p}from"./object-table-DTqnDN-H.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ezOPBKiU.js";import"./preload-helper-BzY2PQK8.js";import"./Table-DnFu5Qca.js";import"./index-CllJbB6n.js";import"./Dialog-BQe1t3O4.js";import"./cross-BL0CmC8v.js";import"./svgIconContainer-BiEJIKWJ.js";import"./useBaseUiId-DD-rnAgn.js";import"./InternalBackdrop-50xUnS5H.js";import"./composite-DXLhbd5q.js";import"./index-CF3EfJQa.js";import"./index-Cyo2_RId.js";import"./index-zmjPNORe.js";import"./useEventCallback-C8EWv1mM.js";import"./SkeletonBar-D_7uUrgz.js";import"./LoadingCell-BF9OtyKp.js";import"./ColumnConfigDialog-B_VPvCsk.js";import"./DraggableList-DDmZHPJs.js";import"./search-BOFS1DOk.js";import"./Input-eja5fv_S.js";import"./useControlled-OksHndqL.js";import"./Button-BiBj2Ngy.js";import"./small-cross-Brklb7bd.js";import"./ActionButton-Dc9XrfLH.js";import"./Checkbox-Bymh2P1S.js";import"./useValueChanged-DbYhsi4t.js";import"./CollapsiblePanel-DY2xqSav.js";import"./MultiColumnSortDialog-D1gQqu1j.js";import"./MenuTrigger-CrjuaHsp.js";import"./CompositeItem-C7oLwUzE.js";import"./ToolbarRootContext-sOFoFOUi.js";import"./getDisabledMountTransitionStyles-DUae_uwF.js";import"./getPseudoElementBounds-BVQl0rR8.js";import"./chevron-down-9ao4cWz0.js";import"./index-JYM0ZjgP.js";import"./error-Btl2ABt3.js";import"./BaseCbacBanner-pDJQtSGl.js";import"./makeExternalStore-DSCive7G.js";import"./Tooltip-2hA_c5uF.js";import"./PopoverPopup-Bh2SXv5G.js";import"./debounce-CCRuevd-.js";import"./useOsdkClient-BfrDVP7e.js";import"./tick-CVC53zOF.js";import"./DropdownField-DUhPo9yt.js";import"./isEqual-f8Z9Lb_j.js";import"./withOsdkMetrics-YnroKoAT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
