import{j as i}from"./iframe-Dn0pOY-8.js";import{O as p}from"./object-table-NN6WWUh5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DKg34BtF.js";import"./preload-helper-D3q3y7aq.js";import"./Table-CcWZ-h4b.js";import"./index-BE-XY2ni.js";import"./Dialog-_kaSvhU6.js";import"./cross-n8lwrCaB.js";import"./svgIconContainer-DTaLY8It.js";import"./useBaseUiId-Do0azpaM.js";import"./InternalBackdrop-CF1SY7QH.js";import"./composite-DS8xZpiv.js";import"./index-DJYmYZuk.js";import"./index-R8QcWJSj.js";import"./index-CU2mmJPH.js";import"./useEventCallback-JlUKJEzf.js";import"./SkeletonBar-xy8Js1OW.js";import"./LoadingCell-BgGGw7-z.js";import"./ColumnConfigDialog-BTHUe9ej.js";import"./DraggableList-DZgHZ0kh.js";import"./search-C3gVcqfq.js";import"./Input-BCcDRsSE.js";import"./useControlled-BI9A7g3Y.js";import"./isEqual-DS8jWXmT.js";import"./isObject-2GYtfsXT.js";import"./Button-CC-Ty1WR.js";import"./ActionButton-B94ichQm.js";import"./Checkbox-9WESJVCu.js";import"./useValueChanged-DcSAkI_F.js";import"./CollapsiblePanel-D1-zf62U.js";import"./MultiColumnSortDialog-B46C9iwB.js";import"./MenuTrigger-BO84EjZc.js";import"./CompositeItem-DLwnYDeG.js";import"./ToolbarRootContext-BWlGQFTf.js";import"./getDisabledMountTransitionStyles-N1RSLi4f.js";import"./getPseudoElementBounds-CzOUzqOM.js";import"./chevron-down-BGIvV33R.js";import"./index-D5xxfjMw.js";import"./error-D8wDGNsv.js";import"./BaseCbacBanner-C7kDrPBm.js";import"./makeExternalStore-Dqwllyj5.js";import"./Tooltip-MaTCI-y-.js";import"./PopoverPopup-Bdypen72.js";import"./toNumber-C9JJp1LT.js";import"./useOsdkClient-B0chaxJx.js";import"./tick-C_RFRraQ.js";import"./DropdownField-DhaM22xE.js";import"./withOsdkMetrics-LKNyPTl9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
