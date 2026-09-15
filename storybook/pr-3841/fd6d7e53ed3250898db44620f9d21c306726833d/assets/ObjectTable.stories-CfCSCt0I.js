import{j as i}from"./iframe-lPbU9V6o.js";import{O as p}from"./object-table-CIp0ToWc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DBX0KLrZ.js";import"./preload-helper-CfcQGX_H.js";import"./Table-BJV2q72H.js";import"./index-BgY5H93d.js";import"./Dialog-DuRrc0QT.js";import"./cross-1MrZuHJo.js";import"./svgIconContainer-DdnoMbP6.js";import"./useBaseUiId-B5KMMy-h.js";import"./InternalBackdrop-BhwiTjVN.js";import"./composite-COK8eLgF.js";import"./index-D_uPtWn9.js";import"./index-Dw0sPzkR.js";import"./index-BQiDKTAm.js";import"./useEventCallback-CQBa0_96.js";import"./SkeletonBar-BqV2iuqD.js";import"./LoadingCell-lrdD8Ijg.js";import"./ColumnConfigDialog-CkGE76dh.js";import"./DraggableList-Cbah8ZBW.js";import"./search-BpuAyapl.js";import"./Input-Bs12mOix.js";import"./useControlled-DmJZYhoD.js";import"./Button-B8cvgo0T.js";import"./small-cross-BMajOB7A.js";import"./ActionButton-Ct_RY74Q.js";import"./Checkbox-C7E2drHm.js";import"./useValueChanged-D78zyaD8.js";import"./CollapsiblePanel-D3QrSoDf.js";import"./MultiColumnSortDialog-CVIfx6wW.js";import"./MenuTrigger-DLj-E7PY.js";import"./CompositeItem-vBOQ9KDG.js";import"./ToolbarRootContext-CioZEdCf.js";import"./getDisabledMountTransitionStyles-BP3w0PCy.js";import"./getPseudoElementBounds-C_eOrCbl.js";import"./chevron-down-BHa1JvBu.js";import"./index-CKx0DSN2.js";import"./error-Ba94mTx6.js";import"./BaseCbacBanner-B8fuQNun.js";import"./makeExternalStore-CvGEVSlU.js";import"./Tooltip-DX66rpSM.js";import"./PopoverPopup-Bdk46Ceq.js";import"./debounce-Cj3rKq4j.js";import"./useOsdkClient-DdgRVKHN.js";import"./tick-DR2B2bzz.js";import"./DropdownField-C-MLBQws.js";import"./isEqual-B1HSOOeH.js";import"./withOsdkMetrics-CF099yPb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
