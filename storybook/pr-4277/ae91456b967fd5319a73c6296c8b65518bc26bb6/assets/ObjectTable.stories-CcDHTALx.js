import{j as i}from"./iframe-CMYq_tcz.js";import{O as p}from"./object-table-chC0aMy3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9WLi7aX.js";import"./preload-helper-CM9HDmHc.js";import"./Table-HbIDX6wp.js";import"./index-xVeJSQI1.js";import"./Dialog-BVb0pQgK.js";import"./cross-dRI083CA.js";import"./svgIconContainer-exLH2FjZ.js";import"./useBaseUiId-DSFxpXlB.js";import"./InternalBackdrop-BcLUyUm4.js";import"./composite-DiZpwFe_.js";import"./index-BY7tovu0.js";import"./index-BFodXj3S.js";import"./index-CbXc65Z2.js";import"./useEventCallback-Ce6dWKw4.js";import"./SkeletonBar-Tsn6iOqu.js";import"./LoadingCell-CydlYTU4.js";import"./ColumnConfigDialog-jtuM7b8R.js";import"./DraggableList-BYvbYXgI.js";import"./search-QHRMuF2d.js";import"./Input-C2JC1_0u.js";import"./useControlled-Cizv6LhD.js";import"./Button-Cx35rN_X.js";import"./small-cross-DgdOOgoQ.js";import"./ActionButton-L6DUuvD5.js";import"./Checkbox-BHMoxAgM.js";import"./useValueChanged-BCgyiXw4.js";import"./CollapsiblePanel-DQ-gJg9V.js";import"./MultiColumnSortDialog-qD0rIV6_.js";import"./MenuTrigger-BrBgYbtl.js";import"./CompositeItem-zd83RHVO.js";import"./ToolbarRootContext-BkwDgNb_.js";import"./getDisabledMountTransitionStyles-UwTH6edI.js";import"./getPseudoElementBounds-eVkaC__S.js";import"./chevron-down-BNRseUEV.js";import"./index-C0T6zzR8.js";import"./error-BMW1MkdC.js";import"./BaseCbacBanner-pp-M4p2X.js";import"./makeExternalStore-DnxSotUN.js";import"./Tooltip-DibPgXFy.js";import"./PopoverPopup-BZ8d3rO1.js";import"./debounce-BQrMOEs3.js";import"./useOsdkClient-BF6Arrdj.js";import"./tick-BWkBomqM.js";import"./DropdownField-BI-yI3jd.js";import"./isEqual-BJnJYBP9.js";import"./withOsdkMetrics-KpOnxc9_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
