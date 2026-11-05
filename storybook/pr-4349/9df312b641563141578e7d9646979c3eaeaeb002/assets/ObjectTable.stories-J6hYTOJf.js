import{j as i}from"./iframe-BqTu4XiU.js";import{O as p}from"./object-table-CZfwSZu4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6yh7q7a.js";import"./preload-helper-CLwPNuFm.js";import"./Table-OBAT8geJ.js";import"./index-n4P62ULA.js";import"./Dialog-DBk-Vi-C.js";import"./cross-Bf-ZTIWt.js";import"./svgIconContainer-ssNd1Mel.js";import"./useBaseUiId-DOa2ktQ_.js";import"./InternalBackdrop-BWQJzTSw.js";import"./composite-Uju8Gyxg.js";import"./index-DPw1J95l.js";import"./index-XmYkAd4i.js";import"./index-C7HdEQi2.js";import"./useEventCallback-CSmK-UP6.js";import"./SkeletonBar-Cm27X7lR.js";import"./LoadingCell-BolsaO9m.js";import"./ColumnConfigDialog-BCdjNuhe.js";import"./DraggableList-Dnf99Feo.js";import"./search-CGymVd3o.js";import"./Input-CyJM7H_A.js";import"./useControlled-BTMI3vML.js";import"./Button-B0Jsn_TB.js";import"./small-cross-CbYqYfDd.js";import"./ActionButton-B-w92oTU.js";import"./Checkbox-D8VV1CyH.js";import"./useValueChanged-MQHCd7Zh.js";import"./CollapsiblePanel-7y2KhLQa.js";import"./MultiColumnSortDialog-DL-19dfG.js";import"./MenuTrigger-Djp-RtLd.js";import"./CompositeItem-2LiZgC-6.js";import"./ToolbarRootContext-I9KV8qho.js";import"./getDisabledMountTransitionStyles-Dm1GabcS.js";import"./getPseudoElementBounds-DFuKTwTc.js";import"./chevron-down-BzSkZyB8.js";import"./index-B8t3MqHb.js";import"./error-gQVPInMQ.js";import"./BaseCbacBanner-BQLkMW-Q.js";import"./makeExternalStore-CD6czKDm.js";import"./Tooltip-Ce85HlPx.js";import"./isObject-ck1XpDGo.js";import"./debounce-CinR7-WT.js";import"./useOsdkClient-CY3-Qcbp.js";import"./tick-vL6Zu8Fr.js";import"./DropdownField-CSfoNHLP.js";import"./isEqual-BCgrOiLo.js";import"./_baseIsEqual-D26Zmm1G.js";import"./withOsdkMetrics-BmTAUVUD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
