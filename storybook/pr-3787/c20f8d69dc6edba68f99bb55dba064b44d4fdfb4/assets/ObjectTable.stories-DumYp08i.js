import{j as i}from"./iframe-DBDiaCFH.js";import{O as p}from"./object-table-DzPjZ5wA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-nzxMyVH8.js";import"./preload-helper-CWzIkJz_.js";import"./Table-BKuVdOeS.js";import"./index-D_Q-x2L7.js";import"./Dialog-TVzYgLAf.js";import"./cross-CgXQH7_j.js";import"./svgIconContainer-6ctrVKh_.js";import"./useBaseUiId-DgDIOl-3.js";import"./InternalBackdrop-CBuZjigt.js";import"./composite-CjFrvZji.js";import"./index-BMfgUa25.js";import"./index-B5wN7D3f.js";import"./index-Dw3yDBgP.js";import"./useEventCallback-CCU0ou4a.js";import"./SkeletonBar-BIWH6fja.js";import"./LoadingCell-CI5ABUAv.js";import"./ColumnConfigDialog-CUMGYbNI.js";import"./DraggableList-CCHb2Foi.js";import"./search-CyOIbSz8.js";import"./Input-DKUt-MlO.js";import"./useControlled-BpXAkJvi.js";import"./isEqual-CMZMOgMY.js";import"./isObject-DqQC86dg.js";import"./Button-pSxneB8s.js";import"./ActionButton-CctFmRuO.js";import"./Checkbox-CKac-IxQ.js";import"./useValueChanged-CWt7t3qS.js";import"./CollapsiblePanel-BbNVGzEc.js";import"./MultiColumnSortDialog-DxxaaEbK.js";import"./MenuTrigger-BpWfF_OZ.js";import"./CompositeItem-B5nUuPn8.js";import"./ToolbarRootContext-A98l2Fo-.js";import"./getDisabledMountTransitionStyles-cV85HYgT.js";import"./getPseudoElementBounds-B5mUW0aI.js";import"./chevron-down-Ce9XSsNp.js";import"./index-Dfh84t6i.js";import"./error-CW5BzoP2.js";import"./BaseCbacBanner-CUK3Clcg.js";import"./makeExternalStore-BzqUGqFb.js";import"./Tooltip-CLt9Lwfx.js";import"./PopoverPopup-CmEuBpr5.js";import"./toNumber-CCQvBWWu.js";import"./useOsdkClient-CDjN6C8U.js";import"./tick-Cvhdnzky.js";import"./DropdownField-BCHUjyWz.js";import"./withOsdkMetrics-CD41Q7Nf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
