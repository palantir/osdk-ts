import{j as i}from"./iframe-D50gvACc.js";import{O as p}from"./object-table-ZrlfaP7L.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BC4pjv7N.js";import"./preload-helper-m4a9UOSi.js";import"./Table-B6t6wwW-.js";import"./index-D9W_tl0t.js";import"./Dialog-CkVl3aVU.js";import"./cross-Pq5KldeO.js";import"./svgIconContainer-CrMVLaIb.js";import"./useBaseUiId-B4CrM7Z9.js";import"./InternalBackdrop-C90kG2yo.js";import"./composite-ZZ8bIc9H.js";import"./index-DV6IgZCx.js";import"./index-r25c1lQA.js";import"./index-DkDBiS-l.js";import"./useEventCallback-DQIC9jeP.js";import"./SkeletonBar-COAj0VN9.js";import"./LoadingCell-CFVOg4i3.js";import"./ColumnConfigDialog-C2En9dmD.js";import"./DraggableList-cBrulBDd.js";import"./search-B-iaR71s.js";import"./Input-BVlUigg9.js";import"./useControlled-DhIeaHMy.js";import"./isEqual-DC3R2B__.js";import"./isObject-BKu_NypX.js";import"./Button-Cc_XGaKn.js";import"./ActionButton-BnBWU7b6.js";import"./Checkbox-D0iA7QiN.js";import"./useValueChanged-Bv1-7XTv.js";import"./CollapsiblePanel-BK7f2JiZ.js";import"./MultiColumnSortDialog-Cu2Su_pp.js";import"./MenuTrigger-CPoMb3K-.js";import"./CompositeItem-nz8C8OlV.js";import"./ToolbarRootContext-Bo9_3IT0.js";import"./getDisabledMountTransitionStyles-CjBbMdti.js";import"./getPseudoElementBounds-CRj6P487.js";import"./chevron-down-Bre7sq7M.js";import"./index-CvJL4ig_.js";import"./error-D_eBDVCi.js";import"./BaseCbacBanner-D4hPwZ4m.js";import"./makeExternalStore-DAih4Bbz.js";import"./Tooltip-DofsflHR.js";import"./PopoverPopup-C7sk1G4a.js";import"./toNumber-CmflZWAm.js";import"./useOsdkClient-suy4OVOq.js";import"./tick-BIdy8k4j.js";import"./DropdownField-CR50LWxf.js";import"./withOsdkMetrics-BboHIQkZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
