import{j as i}from"./iframe-BxrPZaNO.js";import{O as p}from"./object-table-x_M-xICi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BWtqYu_T.js";import"./preload-helper-Cx3YQJHu.js";import"./Table-BmoqWH96.js";import"./index-J6lGX-m2.js";import"./Dialog-RbvnsOmy.js";import"./cross-BmUQIuiH.js";import"./svgIconContainer-BEnRdrAB.js";import"./useBaseUiId-Di1mefXN.js";import"./InternalBackdrop-D4XZcSF_.js";import"./composite-DfF43hpZ.js";import"./index-D_nzKAep.js";import"./index-BCG6silL.js";import"./index-Ot472uRJ.js";import"./useEventCallback-CrPdpknM.js";import"./SkeletonBar-BUlCSkf0.js";import"./LoadingCell-C-YiETW-.js";import"./ColumnConfigDialog-VEP7O-ZA.js";import"./DraggableList-DVT8VoXV.js";import"./search-CfnXtNGj.js";import"./Input-BGI14JLq.js";import"./useControlled-BtpDwHUZ.js";import"./isEqual-DBEr3yIs.js";import"./isObject-ByG7RK6C.js";import"./Button-B7x6CZke.js";import"./ActionButton-BWhtJHeB.js";import"./Checkbox-CrjH7Efp.js";import"./useValueChanged-DCfT8qbt.js";import"./CollapsiblePanel-BFETjxaU.js";import"./MultiColumnSortDialog-B9G5hIec.js";import"./MenuTrigger-B5P8IXx7.js";import"./CompositeItem-DTxAmhYK.js";import"./ToolbarRootContext-Bqz8S5Yi.js";import"./getDisabledMountTransitionStyles-BjZgcrwj.js";import"./getPseudoElementBounds-Bbwc-RQ9.js";import"./chevron-down-Be0JtK3U.js";import"./index-Cp78tmdM.js";import"./error-ChOD6vLs.js";import"./BaseCbacBanner-CgoxDGzA.js";import"./makeExternalStore-9Fofboy5.js";import"./Tooltip-DNoJovMa.js";import"./PopoverPopup-Bg6BFVuU.js";import"./toNumber-CN-X1Wq4.js";import"./useOsdkClient-D4yGb6wb.js";import"./tick-CyYxxVPP.js";import"./DropdownField-Cqh4Clp4.js";import"./withOsdkMetrics-D9tI6rXs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
