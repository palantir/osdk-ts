import{j as i}from"./iframe-C03US_I6.js";import{O as p}from"./object-table-BZlG6oo3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-_Eq-HtQl.js";import"./preload-helper-C_hpKMU_.js";import"./Table-pVuoTnHq.js";import"./index-C0TeYPg1.js";import"./Dialog-CzJGcRjs.js";import"./cross-B_4MYCZ_.js";import"./svgIconContainer-EwnPmkII.js";import"./useBaseUiId-D-uzqdoM.js";import"./InternalBackdrop-DPKQbzSG.js";import"./composite-UEsmsm-V.js";import"./index-YgCpM4My.js";import"./index-nwRvsWdy.js";import"./index-4tl9fbw5.js";import"./useEventCallback-BTvWob_8.js";import"./SkeletonBar-Cpm1ZtWz.js";import"./LoadingCell--4NBS1L8.js";import"./ColumnConfigDialog-Bmmkpv58.js";import"./DraggableList-Do8dQmK7.js";import"./search-tIkv7nJO.js";import"./Input-kXzLNjp1.js";import"./useControlled-Ce_eW3Tc.js";import"./isEqual-CkSrUxTo.js";import"./isObject-LLr9FPm1.js";import"./Button-Cia6mCYi.js";import"./ActionButton-CbbLCAxW.js";import"./Checkbox-DsQLhhy7.js";import"./useValueChanged-Ccsz7UbU.js";import"./CollapsiblePanel-DW8Rz6WZ.js";import"./MultiColumnSortDialog-BuGwf2kg.js";import"./MenuTrigger-BEuF51J5.js";import"./CompositeItem-5t-e12Jc.js";import"./ToolbarRootContext-BcfMYFrd.js";import"./getDisabledMountTransitionStyles-CGKROOJp.js";import"./getPseudoElementBounds-UOKVWr3N.js";import"./chevron-down-DSf6y05Z.js";import"./index-BcDzzwMS.js";import"./error-BY2GZ9CK.js";import"./BaseCbacBanner-B4Oqgm8C.js";import"./makeExternalStore-Cj2cBj8H.js";import"./Tooltip-Cwgqdokn.js";import"./PopoverPopup-DACaeaPi.js";import"./toNumber-CKVj-TJi.js";import"./useOsdkClient-BzWhRUai.js";import"./tick-ClJNL60R.js";import"./DropdownField-Ja7wn_To.js";import"./withOsdkMetrics-n1LItz_B.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
