import{j as i}from"./iframe-DiEonpI4.js";import{O as p}from"./object-table-Cj3vTSS3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cw__XVRm.js";import"./preload-helper-CK-k_2Vt.js";import"./Table-CQYEccso.js";import"./index-emI1jrST.js";import"./Dialog-BOrLCAdB.js";import"./cross-Dk3kDcDy.js";import"./svgIconContainer-HP-rjnIi.js";import"./useBaseUiId-vTxFcR1B.js";import"./InternalBackdrop-EQ6LpJI_.js";import"./composite-CGrPsAxE.js";import"./index-CLd9qPG2.js";import"./index-Ds0MF9yD.js";import"./index-CiZmf62M.js";import"./useEventCallback-CdNjUNof.js";import"./SkeletonBar-z7idkCKw.js";import"./LoadingCell-Dw44iy_M.js";import"./ColumnConfigDialog-CusMm4zO.js";import"./DraggableList-BV6fb_vM.js";import"./search-BguN7d-l.js";import"./Input-DeBBkK_j.js";import"./useControlled-BXxbQ2_H.js";import"./Button-DUYCFQGz.js";import"./small-cross-CJHxZfcv.js";import"./ActionButton-xlIYdZYB.js";import"./Checkbox-BmZi08nF.js";import"./useValueChanged-BUX6j6jW.js";import"./CollapsiblePanel-D8lZXkVz.js";import"./MultiColumnSortDialog-DdzeV36a.js";import"./MenuTrigger-5Ts7mkeP.js";import"./CompositeItem-Cogr6rzU.js";import"./ToolbarRootContext-D-kjOzEz.js";import"./getDisabledMountTransitionStyles-CYLa5ttS.js";import"./getPseudoElementBounds-BF-DLRq1.js";import"./chevron-down-C-r7fv-U.js";import"./index-DL9fAFGC.js";import"./error-DiLLCp_W.js";import"./BaseCbacBanner-BHqjCXez.js";import"./makeExternalStore-BUkIaKmg.js";import"./Tooltip-DbBb7fon.js";import"./PopoverPopup-DYIt5v_N.js";import"./debounce-Cm2KkAbL.js";import"./useOsdkClient-BTBjVGr0.js";import"./tick-8-vebs0z.js";import"./DropdownField-KRyqpjup.js";import"./isEqual-D3P-_--k.js";import"./withOsdkMetrics-CSqvl8Bo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
