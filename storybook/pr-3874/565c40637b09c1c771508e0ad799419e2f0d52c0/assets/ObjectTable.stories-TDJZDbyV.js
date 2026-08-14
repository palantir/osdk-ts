import{j as i}from"./iframe-CEoeK06g.js";import{O as p}from"./object-table-PCq9mE--.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Da1QfIGA.js";import"./preload-helper-D0HY9C8v.js";import"./Table-CiBk8Kuj.js";import"./index-CbcAYo9G.js";import"./Dialog-Do5jMUdN.js";import"./cross-D1VoGJpt.js";import"./svgIconContainer-CtUSixF7.js";import"./useBaseUiId-DlA3_oGO.js";import"./InternalBackdrop-CVkNWXpf.js";import"./composite-DO_ZxZQ1.js";import"./index-CDp82B90.js";import"./index-BWMfSkVY.js";import"./index-ki59gnJf.js";import"./useEventCallback-DdW65cyv.js";import"./SkeletonBar-Dm0Xea2F.js";import"./LoadingCell-BE7MH8sz.js";import"./ColumnConfigDialog-D5MKgIYZ.js";import"./DraggableList-DShl7tzb.js";import"./search-Dv4SY-Fw.js";import"./Input-BNn8L34r.js";import"./useControlled-BAISDtcI.js";import"./Button-xvTdbQWs.js";import"./small-cross-a5SRE8gl.js";import"./ActionButton-CUfdyyWy.js";import"./Checkbox-DeqDc74u.js";import"./useValueChanged-BCvrXU65.js";import"./CollapsiblePanel-D5OwgvzE.js";import"./MultiColumnSortDialog-D7XhxwMe.js";import"./MenuTrigger-C8ZuGGuG.js";import"./CompositeItem-Hmlr3-VY.js";import"./ToolbarRootContext-DAZXfHsD.js";import"./getDisabledMountTransitionStyles-yz_wdS6E.js";import"./getPseudoElementBounds-OONeQKhP.js";import"./chevron-down-CM7IFICS.js";import"./index-D39DbJ__.js";import"./error-gl_nrOic.js";import"./BaseCbacBanner-BSA1h8ba.js";import"./makeExternalStore-B-qUAwEg.js";import"./Tooltip-BXxrMAtC.js";import"./PopoverPopup-Cwf1wOPM.js";import"./debounce-D18MSEXa.js";import"./useOsdkClient-BIAe_nCU.js";import"./tick-B8IBu5LL.js";import"./DropdownField-C-5y2i30.js";import"./isEqual-DcYqH4l4.js";import"./withOsdkMetrics-CNrGK-H6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
