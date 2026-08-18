import{j as i}from"./iframe-Co4qWrtI.js";import{O as p}from"./object-table-BMTteqB4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CC7X7T3_.js";import"./preload-helper-CLLjQro7.js";import"./Table-BjVcsb4-.js";import"./index-DEzmk0WZ.js";import"./Dialog-CxRahfUX.js";import"./cross-SEs1k_Kd.js";import"./svgIconContainer-DaajecJ9.js";import"./useBaseUiId-BAgt3F1o.js";import"./InternalBackdrop-BwGu3z4c.js";import"./composite-DHfKBQ5i.js";import"./index-C2z4NjHs.js";import"./index-CqKJ3sPz.js";import"./index-C_-wbz46.js";import"./useEventCallback-OwSlM4ZE.js";import"./SkeletonBar-DfHQ4TSe.js";import"./LoadingCell-C1t0UbO6.js";import"./ColumnConfigDialog-5bij5Oc4.js";import"./DraggableList-WMBuZ8JT.js";import"./search-DLItUO9A.js";import"./Input-oSQlsB7a.js";import"./useControlled-BInZf-2P.js";import"./Button-sQ3dXKZH.js";import"./small-cross-iZ4ErZEa.js";import"./ActionButton-BLbkXCDW.js";import"./Checkbox-BaktbOjr.js";import"./useValueChanged-XMocqPgo.js";import"./CollapsiblePanel-DO0IOgEL.js";import"./MultiColumnSortDialog-tQ5ixUGv.js";import"./MenuTrigger-HYmZnr0U.js";import"./CompositeItem-DaLiwHmB.js";import"./ToolbarRootContext-DBPxppp8.js";import"./getDisabledMountTransitionStyles-BNu5cLid.js";import"./getPseudoElementBounds-DiLEPQDo.js";import"./chevron-down-CqSMzTaF.js";import"./index-C0XVZZRD.js";import"./error-DAul4oNM.js";import"./BaseCbacBanner-aSfqa7u8.js";import"./makeExternalStore-BVlyj7sn.js";import"./Tooltip-DQKyQxoY.js";import"./PopoverPopup-D4KihDvW.js";import"./debounce-DOmcCNrq.js";import"./useOsdkClient-gLFbYCUi.js";import"./tick-D00iMxE3.js";import"./DropdownField-D_sH1kdW.js";import"./isEqual-CNxbKZsb.js";import"./withOsdkMetrics-CtjXLxVF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
