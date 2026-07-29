import{j as i}from"./iframe-9L4vMhG3.js";import{O as p}from"./object-table-DlLw0Dw8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dz0UI9rV.js";import"./preload-helper-BmqcIEn7.js";import"./Table-CiEgzwih.js";import"./index-_pdaMpiB.js";import"./Dialog-CEYM9xS_.js";import"./cross-BpNWdRWr.js";import"./svgIconContainer-D9lmXivJ.js";import"./useBaseUiId-D-sjda76.js";import"./InternalBackdrop-Cen5tzmJ.js";import"./composite-Bx4vMELY.js";import"./index-Dxea6VRI.js";import"./index-B9Ie_NWS.js";import"./index-DPjA9htS.js";import"./useEventCallback-CQVpKJiq.js";import"./SkeletonBar-DG_ilxDz.js";import"./LoadingCell-CTXKMQu7.js";import"./ColumnConfigDialog-EKNQe5rB.js";import"./DraggableList-DjUTDOw-.js";import"./search-Xcg7LzRX.js";import"./Input-Bux853dQ.js";import"./useControlled-CD9rYDgT.js";import"./isEqual-Dd0SMg4R.js";import"./isObject-bWt81XNR.js";import"./Button-drHfdObt.js";import"./ActionButton-UywGJSCF.js";import"./Checkbox-D94n2NGO.js";import"./useValueChanged-C7jgUmnL.js";import"./CollapsiblePanel-DYm1U3zT.js";import"./MultiColumnSortDialog-Tl8jPhNb.js";import"./MenuTrigger-CXgtBZpD.js";import"./CompositeItem-BfdUBqPa.js";import"./ToolbarRootContext-DnGH9Ipt.js";import"./getDisabledMountTransitionStyles-CPYcuQBc.js";import"./getPseudoElementBounds-cc7gm7GG.js";import"./chevron-down-B91fbDl5.js";import"./index-DAKTJ6F7.js";import"./error-XbW8w7e0.js";import"./BaseCbacBanner-DI9IEL2s.js";import"./makeExternalStore-DlzWWYhg.js";import"./Tooltip-CX_775Pp.js";import"./PopoverPopup-D4s4p01u.js";import"./toNumber-C7Jq7yzN.js";import"./useOsdkClient-B0jbpyHy.js";import"./tick-jg97K6ah.js";import"./DropdownField-3bMQt7y0.js";import"./withOsdkMetrics-CRdZIZCN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
