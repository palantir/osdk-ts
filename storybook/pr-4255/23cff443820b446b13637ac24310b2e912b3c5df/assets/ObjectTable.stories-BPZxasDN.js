import{j as i}from"./iframe-NFk5yTCl.js";import{O as p}from"./object-table-CEKBcnE_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5J3XETM.js";import"./preload-helper-DnA7Db5H.js";import"./Table-DYVuCqgi.js";import"./index-BgVD2xhp.js";import"./Dialog-BK10uP18.js";import"./cross-DRob9Y80.js";import"./svgIconContainer-BhRqV9Gd.js";import"./useBaseUiId-DI_-ZcoF.js";import"./InternalBackdrop-C2Dw-qqf.js";import"./composite-CPOhVi5o.js";import"./index-BMMU7vD9.js";import"./index-DvY3t6Bt.js";import"./index-D-jKR7g2.js";import"./useEventCallback-x3ZKmgNJ.js";import"./SkeletonBar-Csl4r0el.js";import"./LoadingCell-in8L2hj-.js";import"./ColumnConfigDialog-DqeZKdFc.js";import"./DraggableList-DCqQpQFP.js";import"./search-DY6YLRUw.js";import"./Input-BW26RmLS.js";import"./useControlled-fqF1Rj4F.js";import"./Button-BVh6l18o.js";import"./small-cross-C5dljSWN.js";import"./ActionButton-CwKbdIeo.js";import"./Checkbox-DMrIqRzw.js";import"./useValueChanged-BaXAbe4f.js";import"./CollapsiblePanel-g_CPEQOy.js";import"./MultiColumnSortDialog-DtQWVoMv.js";import"./MenuTrigger-B-Uzpqi4.js";import"./CompositeItem-ZF-3iBYW.js";import"./ToolbarRootContext-BwRqIVN-.js";import"./getDisabledMountTransitionStyles-Cflekvz6.js";import"./getPseudoElementBounds-C48v4aEa.js";import"./chevron-down-Bk9vMPo2.js";import"./index-ywB7GnFl.js";import"./error-B1DXlG8k.js";import"./BaseCbacBanner-DwPfoD51.js";import"./makeExternalStore-MEUeb9Nq.js";import"./Tooltip-BVpMXNPC.js";import"./PopoverPopup-5q1wytvg.js";import"./debounce-DP-BMAVq.js";import"./useOsdkClient-gFFrbC9S.js";import"./tick-CZZLmvI5.js";import"./DropdownField-Dyz2YO0r.js";import"./isEqual-BH-W0m4A.js";import"./withOsdkMetrics-D_cxEN1y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
