import{j as i}from"./iframe-BOmrqFPc.js";import{O as p}from"./object-table-CgTZhKfv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BWxiAyA0.js";import"./preload-helper-DHdkCmlX.js";import"./Table-BJpB3MpQ.js";import"./index-CsuBd3Ct.js";import"./Dialog-KCVIqPJc.js";import"./cross-C3JW1YVW.js";import"./svgIconContainer-BIv09OFd.js";import"./useBaseUiId-BbxoKReU.js";import"./InternalBackdrop-Bi_UxEim.js";import"./composite-DD_Mh2Hz.js";import"./index-CwZfU70k.js";import"./index-CmDTuj0A.js";import"./index-OMceiRFh.js";import"./useEventCallback-BCbidy2u.js";import"./SkeletonBar-CCtYn663.js";import"./LoadingCell-D20rDd7b.js";import"./ColumnConfigDialog-CMwN6Z58.js";import"./DraggableList-CvUF4ah5.js";import"./search-BDQnen_f.js";import"./Input-DztT7-KE.js";import"./useControlled-fJQSQ2l_.js";import"./Button-CzVdVKcN.js";import"./small-cross-DJnfj9QP.js";import"./ActionButton-BDtYk-kf.js";import"./Checkbox-zixLd25m.js";import"./useValueChanged-Dhmmb8Eg.js";import"./CollapsiblePanel-gIOqhaYB.js";import"./MultiColumnSortDialog-mZBPlG9r.js";import"./MenuTrigger-tX7EZ8Yt.js";import"./CompositeItem-BQhn1KAi.js";import"./ToolbarRootContext-CZljBiwl.js";import"./getDisabledMountTransitionStyles-BpRjKf3X.js";import"./getPseudoElementBounds-BxchgAnl.js";import"./chevron-down-CjR8Mc2-.js";import"./index-7ewfs4s5.js";import"./error-lpzYnACL.js";import"./BaseCbacBanner-CKztZQf-.js";import"./makeExternalStore-CIMBrNRu.js";import"./Tooltip-Cf3Cg01o.js";import"./PopoverPopup-CvmU8NRY.js";import"./debounce-CRQ5iXC9.js";import"./useOsdkClient-BKdn_EkF.js";import"./tick-DWpFBI3S.js";import"./DropdownField-Dbo12qhB.js";import"./isEqual-DZa_3meK.js";import"./withOsdkMetrics-CHgAtXdu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
